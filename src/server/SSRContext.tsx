import { createContext, FunctionComponent } from 'preact'
import { Provider } from 'unistore/preact'
import { isDevelopment, isServer } from '@/helpers/ssr-utils'
import createStore from 'unistore'
import devtools from 'unistore/devtools'

export const SSRContext = createContext(null)
export const ServerContext: FunctionComponent<any> = (props) => {
  return (
    <SSRContext.Provider value={{}}>
      <Provider store={initialUniStore()}>
        {props.children}
      </Provider>
    </SSRContext.Provider>
  )
}

export function initialUniStore() {
  const initState = window.__UNISTORE_STATE__ ?? {}
  const C = createStore
  return isDevelopment ? devtools(C(initState)) : C(initState)
}

export function initialAppState() {
  const initState = window.__APP_STATE__ ?? {}

  return initState
}
