

export function useLayout(layoutName?: string) {
  if (layoutName) window.__APP_STATE__.usedLayout = layoutName

  return window.__APP_STATE__.usedLayout ?? 'default'
}