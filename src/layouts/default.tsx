import './default.pcss'

import { FunctionComponent } from 'preact'
import { CustFooter } from '@/components/elements'

const DefaultLayout: FunctionComponent = props => {
  return (
    <>
      <div className='appDefLayout'>
        <div className='appContent'>
          <header></header>
          <main>
            {props.children}
          </main>
        </div>
        <CustFooter>
        </CustFooter>
      </div>
    </>
  )
}

export default DefaultLayout