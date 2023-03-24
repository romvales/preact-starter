import './builder.pcss'

import { FunctionComponent } from 'preact'

export type BuilderLayoutProps = {}

const BuilderLayout: FunctionComponent<BuilderLayoutProps> = props => {
  return (
    <div className='appBuilderLayout'>
      <header className='appBuilderHeader'></header>
      <main className='appContent'>
        {props.children}
      </main>
    </div>
  )
}

export default BuilderLayout