import { isDevelopment } from './ssr-utils'

export function enableDevTools() {
  if (isDevelopment) {
    require('preact/debug')
    require('preact/devtools')
  }
}
