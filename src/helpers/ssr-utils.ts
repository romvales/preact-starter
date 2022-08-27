import createStore, { Store } from 'unistore'
import devtools from 'unistore/devtools'
import { FunctionComponent } from 'preact'
import { Inputs, useEffect, useState } from 'preact/hooks'
import { useRouterChangeEffect } from './useRouterChangeEffect'

export const environment = {
  get isBrowser() {
    return (typeof process === 'undefined' && typeof module === 'undefined' &&
      (typeof Window === 'function' && typeof Document === 'function')) ||
      typeof Worker === 'function'
  },

  get isServer() {
    return !this.isBrowser && typeof module !== 'undefined'
  }
}

export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = !isDevelopment

export function initUniStore(store?: Store<any>) {
  const initState = window.__UNISTORE_STATE__ ?
    window.__UNISTORE_STATE__ :
    (window.__UNISTORE_STATE__ = {})
  const C = createStore

  return isDevelopment && environment.isBrowser ? devtools(C(initState)) : C(initState)
}

export function initAppState() {
  const initState = window.__APP_STATE__ ?
    window.__APP_STATE__ :
    (window.__APP_STATE__ = {
      serverSideProps: [],
      clientRuntimeConfig: APP_CONFIG.clientRuntimeConfig,
    })

  global.clientRuntimeConfig =
    window.clientRuntimeConfig =
    window.__APP_STATE__.clientRuntimeConfig
  return initState
}

/**
 * getServerSideProps as the name implies, the data-fetching that this function performs
 * only occurs in the server. Its response will be appended on to the component passed.
 * 
 * @param C 
 * @param aF 
 */
export function getServerSideProps<T = any>(C: FunctionComponent<any>, aF: (ctx: ServerContextRef) => Promise<T>) {
  const fName = C.name
  const memoTchecksOldRes = memoTchecks[fName]
  let isNotComponent = false

  // C.toString() and performing checks in regex is an expensive operation, 
  // calling it regularly surely will impact the runtime of getServerSideProps.
  //
  // do: Check if C is a function component, by using regex we check certain keywords
  //     that the JSX runtime (and other possible candidate keywords) uses and
  //     memoize the result to `memoTchecks` and then update the flag `isNotComponent`
  if (!memoTchecksOldRes) {
    memoTchecks[fName] = isNotComponent = !/(_jsxRuntime|children|jsxs|Fragment)/g.test(C.toString())
  }
  
  if (isNotComponent) {
    throw new TypeError(`${C.name.length ? C.name : '(anonymous)'} is not a valid function component.`)
  }

  if (environment.isServer) {
    pendingServerSideProps.push({ C, aF })

    // Once this function is reached by the browser, we index the serverSideProps
    // on the window.__APP_STATE___ using serverSidePropsIndex
  } else {
    const serverSideProps = window.__APP_STATE__.serverSideProps
    let index = window.__APP_STATE__.serverSidePropsIndex--

    // Reset the pointer's value to serverSideProps.
    if (index == 0) index = window.__APP_STATE__.serverSidePropsIndex = serverSideProps.length
    C.defaultProps = Object.assign(C.defaultProps ?? {}, serverSideProps[serverSideProps.length - index])
  }
}

const memoTchecks: { [componentName: string]: boolean } = {}

/**
 * resolvePendingProps 
 * @param ctx 
 */
export async function resolvePendingProps(ctx: ServerContextRef) {
  const Ps = pendingServerSideProps
  const serverSideProps = []

  // numBadProps is a counter for props that are not well defined after
  // resolving some aF function from the `pendingServerSideProps`. This
  // counter will be subtracted from the total serverSideProps length.
  //
  // A badprops is a resolved value by the async aF function from 
  // `getServerSideProps` which is not suitable to be merge to the
  // `defaultProps` of the `C` component.
  //
  let numBadProps = 0

  // Resolve all async props and assign it to the component's 
  // static property `defaultProps`, we also store a copy of the resolved
  // props to the `serverSideProps` for rendering it later on
  // the browser.
  const propsResolvers = []
  for (let index = 0; index < Ps.length; index++) {
    propsResolvers.push((async (Ps, i: number) => {
      let isGoodProps = true
      const { C, aF } = Ps[i]
      const asyncProps = await aF(ctx)

      if (typeof asyncProps !== 'undefined' && asyncProps != undefined &&
        typeof asyncProps === 'object' && typeof asyncProps !== 'number' && !(asyncProps instanceof Array)
        && !(asyncProps instanceof Map) && typeof asyncProps !== 'boolean' && !(asyncProps instanceof Set) &&
        typeof asyncProps !== 'string' && typeof asyncProps !== 'bigint' && typeof asyncProps !== 'function' &&
        typeof asyncProps !== 'symbol' && !(Symbol.iterator in asyncProps) && !(Symbol.asyncIterator in asyncProps)) {
        serverSideProps[i] = asyncProps
      } else {
        isGoodProps = false
        numBadProps++
      }

      if (isGoodProps) C.defaultProps = Object.assign(C.defaultProps ?? {}, asyncProps)

      Promise.resolve()
    })(Ps, index))
  }

  await Promise.all(propsResolvers)

  window.__APP_STATE__.serverSideProps = serverSideProps
  window.__APP_STATE__.serverSidePropsIndex = propsResolvers.length - numBadProps
}

/**
 * useAsyncDataFetch is a hook function that performs data fetching on the client and server-side. The following
 * simple definition describes how this process works:
 * 
 * [client]
 * 1. useAsyncDataFetch is only (unless onServer is set to false) executed on the client-side when the route is changed, 
 *    underthehood we use the `useEffect` function to perform this check (specifically we perform checks on `location.pathname`) 
 *    after it detected that the route changed...
 * 
 * 2. (*) useAsyncDataFetch will use the available previous data that was fetched in the server during server-side rendering,
 *    and then flag out and delete this data from window.\_\_APP_STATE_\_.asyncDataFetches. When there is a detected
 *    navigation to the component containing a useAsyncDataFetch, it will cause the useAsyncDataFetch to either go to (*) or
 *    call the async callback (aCb) which is used as sa callback to the `useEffect` to trigger side-effects that forces 
 *    rerender on the component.
 * 
 * [server]
 * 
 *  -- wip --
 * 
 * @param aCb 
 */
export function useAsyncDataFetch<T = any, S = string>(options: FetchOptions<T> = { onServer: true }, aCb: () => Promise<T>): FetchState<S> {
  const { isBrowser, isServer } = environment
  const [ fState, setState ] = useState<FetchState<S>>({ status: FetchStateStatus.Pending })

  if (isBrowser) {
    useRouterChangeEffect(() => {
      aCb().then(
        res => {
          const { resolveToState } = options
          setState({ status: FetchStateStatus.Success })
          
          // if `options.resolveToState` is specified, we use the resolveToState to trigger a state
          // update to the targeted state by the resolveToState (StateUpdater).
          if (resolveToState) resolveToState(res)
        }
      ).catch(
        err => {
          setState({ status: FetchStateStatus.Error, message: err })
        }
      )
    })
  }

  if (options.onServer && isServer) {

  }

  return fState
}

export const enum FetchStateStatus {
  Success = 0,
  Error,
  Pending,
}

/**
 * resolvePendingAsyncDataFetches
 */
export async function resolvePendingAsyncDataFetches() {


}
