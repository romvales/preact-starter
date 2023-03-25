import { FunctionComponent } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

export type TextfieldProps = {
  validate?: boolean
  required?: boolean
  pattern?: string
  value?: any
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'
  className?: string
  name?: string
  placeholder?: string
  icon?: string
  disabled?: boolean
  min?: number
  max?: number
  
  onChange?: JSXInternal.GenericEventHandler<HTMLInputElement>
  onInput?: JSXInternal.GenericEventHandler<HTMLInputElement>
}

export const Textfield: FunctionComponent<TextfieldProps> = props => {
  const isDisabled: boolean = props.disabled ?? false

  let value: any = props.value != undefined ? props.value : undefined
  let noValidate: boolean = typeof props.validate == 'boolean' ? !props.validate : undefined
  let className: string = props.className ?? undefined
  let tfType: string = props.type ?? 'text'


  return (
    <input
      onChange={props.onChange} 
      onInput={props.onInput}

      min={props.min}
      max={props.max}
      pattern={props.pattern}
      required={props.required}
      noValidate={noValidate}
      value={value}
      type={tfType}
      name={props.name}
      className={className} 
      placeholder={props.placeholder} 
      disabled={isDisabled} />
  )
}