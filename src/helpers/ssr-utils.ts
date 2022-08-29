import createStore, { Store } from 'unistore'
import devtools from 'unistore/devtools'
import { FunctionComponent } from 'preact'
import { StateUpdater, useEffect, useLayoutEffect, useState } from 'preact/hooks'
import { useRouterChangeEffect } from './hooks'

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
      serverSideRoutesWhitelist: {},
      clientRuntimeConfig: APP_CONFIG.clientRuntimeConfig,
      whitelistedRoutes: {},
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
export async function getServerSideProps<T = any>(C: FunctionComponent<any>, aF: (ctx: ServerContextRef) => Promise<T>) {
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
    memoTchecks[fName] = isNotComponent = !/(_jsxRuntime|children|jsxs?|Fragment)/g.test(C.toString())
  }

  if (isNotComponent) { 
    throw new TypeError(`${C.name.length ? C.name : '(anonymous)'} is not a valid function component.`)
  }

  if (environment.isServer) {
    pendingServerSideProps.push({ C, aF })

    // Once this function is reached by the browser, we index the serverSideProps
    // on the window.__APP_STATE___ using serverSidePropsIndex. But if `C` is 
    // in the list of whitelisted routes (window.__APP_STATE__.serverSideRoutesWhitelist). 
    // we will call `aF` so that the `defaultProps` will be populated with the data fetched 
    // data in the browser.
  } else {
    let defaultProps: any

    if (window.__APP_STATE__.serverSideRoutesWhitelist[fName]) {
      await aF(null).then(props => {
        const routeUi = window[`${fName}-route`] 
        routeUi.props = Object.assign(routeUi.props, props)
        defaultProps = props
        delete window[`${fName}-route`]
      })
    } else {
      const serverSideProps = window.__APP_STATE__.serverSideProps
      let index = window.__APP_STATE__.serverSidePropsIndex--

      // Reset the pointer's value to serverSideProps.
      if (index == 0) index = window.__APP_STATE__.serverSidePropsIndex = serverSideProps.length
      defaultProps = serverSideProps[serverSideProps.length - index]
    }


    C.defaultProps = Object.assign(C.defaultProps ?? {}, defaultProps)
  }
}

const memoTchecks: { [componentName: string]: boolean } = {}

/**
 * resolvePendingProps 
 * @param ctx 
 */
export async function resolvePendingProps(ctx: ServerContextRef) {
  const routes: Routes = require('@/views').default
  const routesWhitelist: { [routeName: string]: boolean } = {}
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
    Ps[index].C.defaultProps = {}

    const { req } = ctx
    let isExcluded = false

    // When component `Ps[index].C` does not match the current request URL path
    // we exclude it from the ones that will be data fetched by the server and
    // we put it in a `whitelist` that will be data fetched in the client
    // once `useRouterChangeEffect` detected a URL change in the browser.
    //
    // Additionally, if it matches the current request URL path we will capture
    // the request url for any url parameters ':[keyword]' and then place it
    // into the `defaultProps` of the component.
    for (const route of routes) {
      const patt = new RegExp(route.path.replaceAll(/:[^/]+/g, '([^/]+)')) 

      if (route.component == Ps[index].C && route.path != req.path && !patt.test(req.path)) {
        isExcluded = true
        routesWhitelist[Ps[index].C.name] = true
        break
      }

      let currIndex = 1
      const params = route.path.matchAll(/:([^/]+)/g)
      for (const [, param] of params) {
        const matches = req.path.match(patt) ?? []
        const C = Ps[index].C
        C.defaultProps = Object.assign(C.defaultProps, { [param]: matches[currIndex++] })
      }
    }

    if (isExcluded) continue

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

      if (isGoodProps) C.defaultProps = Object.assign(C.defaultProps, asyncProps)

      Promise.resolve()
    })(Ps, index))
  }

  await Promise.all(propsResolvers)

  window.__APP_STATE__.serverSideProps = serverSideProps
  window.__APP_STATE__.serverSidePropsIndex = propsResolvers.length - numBadProps
  window.__APP_STATE__.serverSideRoutesWhitelist = routesWhitelist
}

/**
 * useAsyncDataFetch is a hook function that performs data fetching on the client and server-side, it accepts
 * two parameters: `options` and `aCb`, the `options` contains flags that can control how `useAsyncDataFetch`
 * data fetches these flags are (`onServer` and `reuse`).
 * 
 *  `onServer` instructs this hook to whether data fetch only in the browser or both.
 *  `reuse`    instructs this hook to not perform the `aCb` callback / data fetch in the browser and must
 *             only index the (by the `aCb` callback) the data that was fetched from the server.
 *
 * `aCb` call back is where the data fetched will go after `useAsyncDataFetch` has finished fetching.
 * 
 * @param aCb 
 */
export function useAsyncDataFetch<T = any, S = string>(
  options: FetchOptions = { onServer: true, reuse: false }, 
  aCb: (fetchState: [ FetchState<S>, StateUpdater<FetchState<S>> ]) => Promise<T>,
):
  // returned type
  [FetchState<S>, FetchResultCallback<T>] {

  const { isBrowser, isServer } = environment
  const [fState, setState] = useState<FetchState<S>>({ status: FetchStateStatus.Pending })
  const [fRes, setFRes] = useState<T>(null)
  let fRCb: FetchResultCallback<T> = () => { }

  if (isBrowser) {
    useRouterChangeEffect(() => {
      const ssrDataCounter = window.__APP_STATE__.asyncDataFetchesIndex
      const ssrData = window.__APP_STATE__.asyncDataFetches[ssrDataCounter - 1]
      let isNotPopulated = true

      // If the ssrData has not been indexed in the browser, instead of
      // performing an HTTP request, we are gonna used the value of `ssrData.data`
      // then we flag `ssrData.data` as used.
      if (options.onServer && ssrData && (!ssrData.used || options.reuse)) {
        setState({ status: FetchStateStatus.Success })
        setFRes(ssrData.data)

        ssrData.used = true
        isNotPopulated = false

        window.__APP_STATE__.asyncDataFetchesIndex++
        // Reset asyncDataFetches counter when it reaches the maximum length.
        if (ssrDataCounter >= window.__APP_STATE__.asyncDataFetches.length)
          window.__APP_STATE__.asyncDataFetchesIndex = 1
      }

      if (isNotPopulated) {
        aCb([ fState, setState ]).then(
          res => {
            setState({ status: FetchStateStatus.Success })
            setFRes(res)
          }
        ).catch(
          err => {
            setState({ status: FetchStateStatus.Error, message: err })
          }
        )
      }
    })

    fRCb = (cb) => {
      useEffect(() => {
        if (fState.status == FetchStateStatus.Success) cb(fRes)
      }, [fState.status])
    }
  }

  if (options.onServer && isServer) {
    const asyncDataFetches = window.__APP_STATE__.asyncDataFetches
    if (!asyncDataFetches) {
      pendingAsyncDataFetches.push({ fState: [ fState, setState ], C: aCb, options })
    } else {
      fRCb = (cb) => {
        const ssrDataCounter = window.__APP_STATE__.asyncDataFetchesIndex
        const ssrData = asyncDataFetches[ssrDataCounter - 1]

        if (ssrData) {
          setState({ status: FetchStateStatus.Success })
          setFRes(ssrData.data)

          window.__APP_STATE__.asyncDataFetchesIndex++
          // Reset asyncDataFetches counter when it reaches the maximum length.
          if (ssrDataCounter >= window.__APP_STATE__.asyncDataFetches.length)
            window.__APP_STATE__.asyncDataFetchesIndex = 1

          if (fRes) {
            return cb(fRes)
          }
        }
      }
    }
  }

  return [fState, fRCb]
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
  const Pa = pendingAsyncDataFetches
  const asyncDataFetches = []

  const resolveFetches = []
  for (let index = 0; index < Pa.length; index++) {
    if (!Pa[index].options.onServer) continue

    resolveFetches.push((async (Pi, index) => {
      const { C, fState } = Pi
      asyncDataFetches[index] = { data: await C(fState), used: false }

      Promise.resolve()
    })(Pa[index], index))
  }

  await Promise.all(resolveFetches)

  window.__APP_STATE__.asyncDataFetches = asyncDataFetches
  window.__APP_STATE__.asyncDataFetchesIndex = resolveFetches.length
  pendingAsyncDataFetches = []
}
