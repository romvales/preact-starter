import { useAppLocale, VALID_LOCALES } from '@/contents'
import { useEffect, useState, useContext } from 'preact/hooks'
import { useSelector, useStore } from '@preact-hooks/unistore'
import { environment, isDevelopment } from './ssr-utils'
import { Request } from 'express'

import expressContext from '@/server/middlewares/express-context'

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

export function useAppContentByLocale<T>(path: string, fallbackValue?: T, cached?: boolean, forceLocale?: VALID_LOCALES): T {
  const __cacheExt__ = /jsonp?|toml/i
  const __extension__ = getContentExt(path)
  const { appLocale } = useAppLocale()
  const [content, setContent] = useState<T>(__get_default_value(fallbackValue, appLocale, path, __extension__))

  const contents: Map<string, T> = new Map()

  useSelector<{ locales: CachedAppLocaleContents }, any>(S => {
    const updateContent = (locale: VALID_LOCALES) => {
      const localePath = `${forceLocale ?? locale}/${path}`
      const isDefaultCached = __cacheExt__.test(__extension__)

      const requireContent = () => contents.set(localePath, require_content(localePath))
      const refContentFromStore = () => contents.set(localePath, S.locales[__extension__][localePath])

      const possiblyHasCache = isDefaultCached && !cached
      const possiblyDontHaveACache = !isDefaultCached && cached

      // ??????
      if ((possiblyHasCache || possiblyDontHaveACache) && environment.isServer) {
        requireContent()
      } else if ((possiblyHasCache || possiblyDontHaveACache) && contents.get(localePath)) {
      } else if ((possiblyHasCache || possiblyDontHaveACache) && S.locales[__extension__][localePath] === undefined) {
        requireContent()
      } else if (possiblyHasCache || possiblyDontHaveACache) {
        refContentFromStore()
      } else {
        requireContent()
      }

      setContent(contents.get(localePath))
      return localePath
    }
    
    if (environment.isServer) {
      const { req } = useContext(expressContext.getContext<{ req: Request }>())
      const appLocale = req.cookies?.appCurrentLocale

      const contentPath = updateContent(appLocale)

      // By default, these extensions are included within the locales cached data.
      if (__cacheExt__.test(__extension__)) S.locales[__extension__][contentPath] = content

      // If a specific locale data is enforced to be cached and server rendered then
      // it is included in the store.
      else if (cached) S.locales[__extension__][contentPath] = content
    }

    useEffect(() => { updateContent(appLocale) }, [ appLocale ])
  }) 

  return content
}

// To avoid calling `.getState()` multiple times, we will memoize its value into 
// this local __cacheLocales variable.
let __cacheLocales: CachedAppLocaleContents

function __get_default_value<T>(defVal: T, locale: string, path: string, ext: string): T {
  let locales: CachedAppLocaleContents

  if (!__cacheLocales) 
    __cacheLocales = locales = useStore<{ locales: CachedAppLocaleContents }>().getState().locales
  else
    locales = __cacheLocales

  return locales[ext][`${locale}/${path}`] ?? defVal
}

// getContentExt is a simple utility function for determining the file extension of a path.
function getContentExt(path: string) {
  const rexp = /\.(?<extension>[a-z]+)$/i
  return path.match(rexp).groups.extension ?? 'md'
}

function require_content(path: string): any {
  let mod: any
  try {
    mod = require(`@/contents/${path}`)
  } catch(err) {
    if (environment.isBrowser) {
      throw err
    }
  }

  return mod
}