import { isDevelopment } from './ssr-utils'

export { 
  isDevelopment, 
  isBrowser, 
  isServer, 
  isProduction,
  initAppState,
  initUniStore,
} from './ssr-utils'

export function enableDevTools() {
  if (isDevelopment) {
    require('preact/debug')
    require('preact/devtools')
  }
}
