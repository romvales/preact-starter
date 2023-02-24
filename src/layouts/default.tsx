
import { FunctionComponent } from 'preact'


export const DefaultLayout: FunctionComponent = props => {
  return (
    <div>
      <header>
        Header
      </header>
      {props.children}
      <footer>
        Footer
      </footer>
    </div>
  )
}