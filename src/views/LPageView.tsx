
import { FunctionComponent } from 'preact'

export const LPageView: FunctionComponent<{ path: string }> = (props) => {
  return (
    <h1 className='headline'>The quick brown fox jumps over the lazy dog.</h1>
  )
}
