import { hydrate, render } from 'preact'
import { App } from '@/App'
import { ServerContext } from '@/server/SSRContext'
import {
  enableDevTools,
  initUniStore,
  initAppState,
  isDevelopment
} from '@/helpers'

enableDevTools()

async function renderApp(App) {
  const appRootEl = document.querySelector('.app-root')
  const renderFunc = isDevelopment ? render : hydrate

  renderFunc(
    <ServerContext value={initAppState()} store={initUniStore()}>
      <App />
    </ServerContext>
    , appRootEl)

  delete window.__UNISTORE_STATE__
}

document.addEventListener('DOMContentLoaded', () => renderApp(App))

if (module.hot)
  module.hot.accept('./App', () => {
    requestAnimationFrame(() => {
      const App = require('@/App').App
      renderApp(App)
    })
  })
