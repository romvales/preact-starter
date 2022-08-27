import { isDevelopment } from './ssr-utils'

export { 
  isDevelopment,
  isProduction,
  initAppState,
  initUniStore,
  getServerSideProps,
  resolvePendingProps,
  resolvePendingAsyncDataFetches,
  useAsyncDataFetch,
  FetchStateStatus,

} from './ssr-utils'

export { useRouterChangeEffect } from './useRouterChangeEffect'

export function enableDevTools() {
  if (isDevelopment) {
    require('preact/debug')
    require('preact/devtools')
  }
}



