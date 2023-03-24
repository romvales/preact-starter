import { environment } from '@/helpers'

/**
 * switchEnvironment
 *
 * Inverts the default values of the properties of `environment` say for example,
 * you are in a browser and you want to experimentally switch to node mode, this
 * function might do the hell that out. 
 */
export function switchEnvironment() {
  const { isBrowser, isServer } = environment

  Object.defineProperty(environment, 'isBrowser', { get() { return !isBrowser } })
  Object.defineProperty(environment, 'isServer', { get() { return !isServer } }) 
}

export function throwNotImplemented(cMesg?: string) {
  throw new Error(cMesg ?? 'Not implemented')
}

