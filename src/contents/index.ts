
import { Request } from 'express'
import { environment } from '@/helpers/ssr-utils'
import { useContext, useState, useCallback } from 'preact/hooks'
import expressContext from '@/server/middlewares/express-context'


export type VALID_LOCALES = 'en' | 'de' | 'kr' | 'jp' | 'zh' | 'tl' | 'fr' | 'es'

//
export function setAppLocale(locale?: VALID_LOCALES): VALID_LOCALES {
  document.cookie = `${encodeURIComponent('appCurrentLocale')}=${encodeURIComponent(locale ?? 'en')}; SameSite=Lax; secure;`
  return locale
}

//
export function useAppLocale() {
  const [appLocale, _setAppLocale] = useState<VALID_LOCALES>()

  const updateAppLocale = (locale: VALID_LOCALES) => {
    _setAppLocale(locale)
    setAppLocale(locale)
  }

  if (environment.isServer) {
    const { req } = useContext(expressContext.getContext<{ req: Request }>())
    _setAppLocale(req.cookies?.appCurrentLocale)
  } else {
    const appCurrentLocalePatt = /appCurrentLocale=(?<appCurrentLocale>[a-z]{2})/i

    // If the appCurrentLocale cookie is happen to be not set, we will
    // execute `setAppLocale` to set the cookie to its default value.
    if (!appCurrentLocalePatt.test(document.cookie)) {
      _setAppLocale('en')
      setAppLocale('en')
    }

    // @watch
    const { appCurrentLocale } = document.cookie.match(appCurrentLocalePatt).groups

    _setAppLocale(appCurrentLocale as VALID_LOCALES)
  }

  return { appLocale, updateAppLocale }
}
