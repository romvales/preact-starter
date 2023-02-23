import { getAppLocale, VALID_LOCALES } from '@/contents'
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

  environment,
} from './ssr-utils'

export {
  useAppTheme,
  useRouterChangeEffect,
  useDocMetadata,
  setDocMetadata,

} from './hooks'

export function enableDevTools() {
  if (isDevelopment) {
    import('preact/devtools')
    import('preact/debug')
  }
}

export function getAppContentByLocale<T>(path: string, forceLocale?: VALID_LOCALES): T {
  return require(`@/contents/${forceLocale ?? getAppLocale()}/${path}`)
}