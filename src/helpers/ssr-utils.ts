import createStore, { Store } from 'unistore'
import devtools from 'unistore/devtools'

export const isBrowser = typeof process === 'undefined' || typeof process.versions.node === 'undefined' || typeof Window === 'object'
export const isServer = !isBrowser && typeof localStorage === 'undefined' && typeof self === 'undefined' && typeof process.version === 'string'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = !isDevelopment

export function initUniStore(store?: Store<any>) {
  const initState = window.__UNISTORE_STATE__ ?? {}
  const C = createStore

  return isDevelopment && isBrowser ? devtools(C(initState)) : C(initState)
}

export function initAppState() {
  const initState = window.__APP_STATE__ ?? {}

  return initState
}
