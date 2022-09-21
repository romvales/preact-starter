import '@/assets/styles/main.pcss'

import { FunctionComponent } from 'preact'
import Router, { getCurrentUrl, route } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import routes from '@/views'
import { environment } from '@/helpers'
import { AppStateStore } from '@/services'
import { useEffect } from 'preact/hooks'

export const App: FunctionComponent<{}> = props => {
  const docUrl = new URL(document.URL)

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <Router url={docUrl.pathname} onChange={handleRouteChange}>
        {
          routes.map(route => {
            const routeUi = route.lazy ?
              <AsyncRoute getComponent={() => Promise.resolve(route.component)} loading={route.loading} path={route.path} default={route.default}></AsyncRoute>
              :
              <route.component path={route.path} default={route.default} />
           
            // When a route component does not match the current url, we considered it 
            // as a whitelist url, this is done so that `getServerSideProps` should only be
            // able to add props into the component when navigated to the component.
            const isWhitelist = window.__APP_STATE__.serverSideRoutesWhitelist[route.component.name]

            if (environment.isBrowser && isWhitelist) {
              window.__whitelistRoutes[route.component.name] = routeUi
            } else if (environment.isBrowser && !isWhitelist) {
              window.__routes[route.component.name] = routeUi
            }

            return routeUi
          })
        }
      </Router>
    </div>
  )
}

function handleRouteChange(ev: any) {
  const state = new AppStateStore
  
  useEffect(() => {
    if (state.isNewStart() && getCurrentUrl() == '/breeds')
      route('/', true)

    return () => state.Close() 
  }, []) 
}
