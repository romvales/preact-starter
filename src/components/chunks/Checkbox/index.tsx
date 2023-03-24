import './index.pcss'

import { FunctionComponent, PreactDOMAttributes } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

export type CheckboxProps = {
  checked?: boolean
  validate?: boolean
  required?: boolean
  className?: string
  name?: string
  onChange?: (ev: JSXInternal.TargetedEvent<HTMLInputElement>) => void
}


export const Checkbox: FunctionComponent<CheckboxProps> = props => {

  let className = props.className ? props.className : undefined
  let validate = typeof props.validate == 'boolean' ? !props.validate : undefined
  let name = props.name ? props.name : undefined

  return (
    <>
    <input 
      onChange={props.onChange}
      checked={props.checked}
      name={name}
      className={className}
      noValidate={validate} 
      type='checkbox' />
    </>
  )
}