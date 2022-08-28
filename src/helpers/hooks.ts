import { EffectCallback, useEffect } from 'preact/hooks'

/**
 * useRouterChangeEffect is a hook that will get triggered whenever the location.pathname of
 * is updated via history API or in other sorts of way.
 */
export function useRouterChangeEffect(efCb: EffectCallback) {
  useEffect(efCb, [ location.pathname ])
}

// ---- html doc metadata related functions

/**
 * useDocMetadata
 */
export function useDocMetadata() {
  return Array.from(document.head.getElementsByTagName('meta'))
}

/**
 * setDocumentMetadata
 */
export function setDocMetadata(Ms: { [key: string]: any }[]) {
  for (const metadata of Ms) {
    const meta = document.createElement('meta')
    for (const key in metadata) meta.setAttribute(key, metadata[key])
    document.head.appendChild(meta)
  } 
}
