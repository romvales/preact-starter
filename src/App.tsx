import '@/assets/main.pcss'

import { FunctionComponent } from 'preact'
import { RouterOnChangeArgs } from 'preact-router'
import { AppRouter } from '@/helpers'
import { handleInitialRouteRequest } from '@/server/middlewares/express-context'
import { useLayout } from '@/layouts'

export const App: FunctionComponent<{}> = props => {
  const Layout = require('@/layouts/' + useLayout()).default
  
  return (
    <div className='appRouter'>
      <Layout>
        <AppRouter currentUrl={window.location.pathname} onChange={handleRouteChange}></AppRouter>
      </Layout>
    </div>
  )
}

function handleRouteChange(ev: RouterOnChangeArgs) {
  handleInitialRouteRequest(ev)
}
