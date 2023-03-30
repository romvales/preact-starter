import './index.pcss'

import { FunctionComponent } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

export type DatefieldProps = {
  value?: string
  validate?: boolean
  required?: boolean
  className?: string
  placeholder?: string
  name?: string
  disabled?: boolean
  onInput?: JSXInternal.GenericEventHandler<HTMLInputElement>
  onChange?: JSXInternal.GenericEventHandler<HTMLInputElement>
}

export const Datefield: FunctionComponent<DatefieldProps> = props => {

  let className = props.className ? props.className : undefined
  let validate = typeof props.validate == 'boolean' ? !props.validate : undefined
  let placeholder = props.placeholder ? props.placeholder : undefined
  let name = props.name ? props.name : undefined

  return (
    <>
    <input 
      onChange={props.onChange}
      onInput={props.onInput}
      disabled={props.disabled}
      required={props.required}
      value={props.value}
      name={name}
      placeholder={placeholder}
      className={className}
      noValidate={validate} 
      type='date' />
    </>
  )
}