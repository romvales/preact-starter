import { FunctionComponent } from 'preact'

import { Footer } from '@/components/elements'

export const DefaultLayout: FunctionComponent = props => {

  return (
    <div className='defl'>
      <div className='defl-container'>
        <header className=''>
          Header
        </header>
        <div className='defl-content'>
          {props.children}
        </div>
      </div>
      <Footer className='defl-footer'></Footer>
    </div>
  )
}