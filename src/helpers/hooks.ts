import { EffectCallback, useEffect, useState, useContext } from 'preact/hooks'
import { environment } from './ssr-utils'
import { Request } from 'express'
import expressContext from '@/server/middlewares/express-context'

/**
 * useRouterChangeEffect is a hook that will get triggered whenever the location.pathname of
 * is updated via history API or in other sorts of way.
 */
export function useRouterChangeEffect(efCb: EffectCallback) {
  useEffect(efCb, [location.pathname])
}

// ---- html doc metadata related functions

/**
 * useDocMetadata
 */
export function useDocMetadata() {
  return Array.from(document.head.querySelectorAll('meta'))
}

/**
 * setDocumentMetadata
 */
export function setDocMetadata(Ms: { [key: string]: any }[]) {
  if (environment.isFinalRender)
    for (const metadata of Ms) {
      const meta = document.createElement('meta')
      for (const key in metadata) meta.setAttribute(key, metadata[key])
      document.head.appendChild(meta)
    }
}

/**
 * useTheme
 */
export function useAppTheme() {
  const [ theme, _setTheme ] = useState<'light' | 'dark'>(getAppTheme())

  const setTheme = (theme?: 'light' | 'dark') => {
    setAppTheme(theme)
    _setTheme(theme)
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [ theme ])

  return { theme, setTheme }
}

export function getAppTheme(): 'light' | 'dark' {
  let theme: 'light' | 'dark'

  if (environment.isServer) {
    const { req } = useContext(expressContext.getContext<{ req: Request }>())
    theme = req.cookies?.appCurrentTheme
  } else {
    const themePatt = /appCurrentTheme=(?<appCurrentTheme>[a-z]+)/i

    // If the appCurrentTheme cookie is happen to be not set, we will
    // execute `setAppTheme` to set the cookie to its default value.
    if (!themePatt.test(document.cookie)) {
      setAppTheme('light')
    }

    // @watch
    const { appCurrentTheme } = document.cookie.match(themePatt).groups
    theme = (appCurrentTheme ?? 'light') as 'light' | 'dark'
  }

  return theme
}

function setAppTheme(theme?: 'light' | 'dark') {
  if (environment.isBrowser)
    document.cookie = `${encodeURIComponent('appCurrentTheme')}=${encodeURIComponent(theme ?? 'light')}; SameSite=Lax; secure;`
}
