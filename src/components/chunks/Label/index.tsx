import './index.pcss'

import { FunctionComponent } from 'preact'

export type LabelProps = {
  className?: string
  for?: string
}

export const Label: FunctionComponent<LabelProps> = props => {
  let className: string = props.className ?? undefined
  const label = <label className={className}>
    {props.children}
  </label>

  if (props.for && props.for.length) label.props.htmlFor = props.for

  return label
}