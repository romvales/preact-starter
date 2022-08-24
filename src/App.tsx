import '@/assets/styles/main.css'

import { FunctionComponent } from 'preact'
import Router from 'preact-router'
import { Link } from 'preact-router/match'
import { LPageView } from '@/views'

export const App: FunctionComponent<{}> = props => {  
  return (
    <>
      <nav>
        <Link href='/home'>Home</Link>
      </nav>
      <hr />
      <Router onChange={handleRouteChange}>
        <LPageView path='/home' /> 
      </Router> 
    </>
  )
}

function handleRouteChange(ev: any) {

}
