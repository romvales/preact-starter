import { EffectCallback, useEffect, useState } from 'preact/hooks'
import { environment } from './ssr-utils'

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
  const [ theme, setTheme ] = useState<'dark' | any>(environment.isBrowser ? localStorage.theme : undefined)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [ theme ])

  return [ theme, setTheme ]
}
