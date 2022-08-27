import { EffectCallback, useEffect } from 'preact/hooks'

/**
 * useRouterChangeEffect is a hook that will get triggered whenever the location.pathname of
 * is updated via history API or in other sorts of way.
 */
export function useRouterChangeEffect(efCb: EffectCallback) {
  useEffect(efCb, [ location.pathname ])
}
