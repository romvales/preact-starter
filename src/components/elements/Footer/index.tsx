
import { FunctionComponent } from 'preact'

export type FooterProps = {
  className?: string
}

export const CustFooter: FunctionComponent<FooterProps> = props => {
  
  return (
    <footer className={props.className}>
      Footer
    </footer>
  )
}