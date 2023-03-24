import './default.pcss'

import { FunctionComponent } from 'preact'

const DefaultLayout: FunctionComponent = props => {
  return (
    <>
      {props.children}
    </>
  )
}

export default DefaultLayout