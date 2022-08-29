import '@/assets/styles/main.pcss'

import { FunctionComponent } from 'preact'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import { Link } from 'preact-router/match'
import routes from '@/views'

export const App: FunctionComponent<{}> = props => {
  const docUrl = new URL(document.URL)

  return (
    <>
      <nav>
        <Link href='/'>Main Root</Link>
        <Link href='/home'>Home</Link>
      </nav>
      <hr />
      <Router url={docUrl.pathname} onChange={handleRouteChange}>
        {
          routes.map(route => {
            const routeUi = route.lazy ?
              <AsyncRoute getComponent={() => Promise.resolve(route.component)} loading={route.loading} path={route.path}></AsyncRoute>
              :
              <route.component path={route.path} />
           
            // When a route component does not match the current url, we add it into 
            // the window.__whitelistedRoutes, this is done so that `getServerSideProps`
            // is able to add props into the component during route navigation.
            const isWhitelist = window.__APP_STATE__.serverSideRoutesWhitelist[route.component.name]

            if (!route.lazy && isWhitelist) {
              window[`${route.component.name}-route`] = routeUi
            }

            return routeUi
          })
        }
      </Router>
    </>
  )
}

function handleRouteChange(ev: any) {

}
