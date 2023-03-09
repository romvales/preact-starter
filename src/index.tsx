import { hydrate, render, FunctionComponent } from 'preact'
import { App } from '@/App'
import { ServerContext } from '@/server/SSRContext'
import { getAppTheme } from '@/helpers/hooks'
import {
  enableDevTools,
  initUniStore,
  initAppState,
  isDevelopment,
} from '@/helpers'


enableDevTools()

async function renderApp(App: FunctionComponent) {
  const appRootEl = document.querySelector('.app-root')
  const renderFunc = isDevelopment ? render : hydrate

  if (getAppTheme() === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  renderFunc(
    <ServerContext value={initAppState()} store={initUniStore()}>
      <App />
    </ServerContext>, 
    appRootEl
  )
}

renderApp(App)

if (module.hot)
  module.hot.accept(() => {
    requestAnimationFrame(() => {
      const App = require('@/App').App
      renderApp(App)
    })
  })


