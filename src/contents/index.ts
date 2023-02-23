
import { Request } from 'express'
import { environment } from '@/helpers/ssr-utils'
import { useContext } from 'preact/hooks'
import expressContext from '@/server/middlewares/express-context'

export type VALID_LOCALES = 'en' | 'de' | 'kr' | 'jp' | 'zh' | 'tl' | 'fr' | 'es'

//
export function setAppLocale(locale?: VALID_LOCALES) {
  document.cookie = `${encodeURIComponent('appCurrentLocale')}=${encodeURIComponent(locale ?? 'en')}; SameSite=Lax; secure;`
}

export function getAppLocale(): VALID_LOCALES {
  let appLocale: VALID_LOCALES

  if (environment.isServer) {
    const { req } = useContext(expressContext.getContext<{ req: Request }>())
    appLocale = req.cookies?.appCurrentLocale
  } else {
    const appCurrentLocalePatt = /appCurrentLocale=(?<appCurrentLocale>[a-z]{2})/i

    // If the appCurrentLocale cookie is happen to be not set, we will
    // execute `setAppLocale` to set the cookie to its default value.
    if (!appCurrentLocalePatt.test(document.cookie)) setAppLocale()

    // @watch
    const { appCurrentLocale } = document.cookie.match(appCurrentLocalePatt).groups

    appLocale = appCurrentLocale as VALID_LOCALES
  }

  return appLocale
}