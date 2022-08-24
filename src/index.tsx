import { render } from 'preact'
import { App } from '@/App'
import { ServerContext } from '@/server/SSRContext'
import { enableDevTools } from '@/helpers'

enableDevTools()

function renderApp(App) {
  const appRootEl = document.querySelector('.app-root')
  render(
    <ServerContext>
      <App />
    </ServerContext>  
  , appRootEl)
}

document.addEventListener('DOMContentLoaded', () => renderApp(App))

if (module.hot)
  module.hot.accept('@/App', () => {
    requestAnimationFrame(() => {
      const App = require('@/App').App
      renderApp(App)
    })
  })
