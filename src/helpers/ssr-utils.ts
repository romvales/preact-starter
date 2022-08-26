import createStore, { Store } from 'unistore'
import devtools from 'unistore/devtools'
import { FunctionComponent } from 'preact'

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
  if (environment.isServer) {
    pendingServerSideProps.push({ C, aF })  

  // Once this function is reached by the browser, we index the serverSideProps
  // on the window.__APP_STATE___ using serverSidePropsIndex
  } else {
    const serverSideProps = window.__APP_STATE__.serverSideProps
    let index = window.__APP_STATE__.serverSidePropsIndex--

    // Reset the pointer's value to serverSideProps.
    if (index == 0) index = window.__APP_STATE__.serverSidePropsIndex = serverSideProps.length

    console.log(serverSideProps)
    C.defaultProps = Object.assign(C.defaultProps ?? {}, serverSideProps[serverSideProps.length-index]) 
  }
}

/**
 * 
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
