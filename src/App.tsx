import '@/assets/styles/main.pcss'

import { FunctionComponent } from 'preact'
import Router from 'preact-router'
import { Link } from 'preact-router/match'
import { LPageView, RootView } from '@/views'

export const App: FunctionComponent<{}> = props => {

  return (
    <>
      <nav>
        <Link href='/'>Main Root</Link>
        <Link href='/home'>Home</Link>
      </nav>
      <hr />
      <Router url={new URL(document.URL).pathname} onChange={handleRouteChange}>
        <RootView path='/' />
        <LPageView path='/home' />
      </Router>
    </>
  )
}

function handleRouteChange(ev: any) {

}
