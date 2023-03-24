import { hydrate, render, FunctionComponent } from 'preact'
import { App } from '@/App'
import { ServerContext } from '@/server/SSRContext'
import { getAppTheme } from '@/helpers/hooks'
import { attachGlobalEvents } from '@/events'
import {
  enableDevTools,
  initUniStore,
  initAppState,
  isDevelopment,
  environment,
} from '@/helpers'
import { RemoteConfigService } from './services'

if (isDevelopment) enableDevTools()
if (environment.isBrowser) await (new RemoteConfigService).fetchRemoteConfig()

async function renderApp(App: FunctionComponent) {
  const renderFunc = isDevelopment ? render : hydrate

  if (getAppTheme() === 'dark')
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')

  attachGlobalEvents()

  renderFunc(
    <ServerContext value={initAppState()} store={initUniStore()}>
      <App />
    </ServerContext>,
    document.querySelector('.app')
  )
}

renderApp(App)

if (module.hot && isDevelopment)
  module.hot.accept()
