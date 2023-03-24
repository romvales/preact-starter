import './styles/base.pcss'
import './styles/popup.variant.pcss'
import './styles/flat.variant.pcss'
import './styles/outline.variant.pcss'

import { FunctionComponent } from 'preact'
import { JSXInternal } from 'preact/src/jsx'

export type ButtonProps = {
  className?: string
  onClick?: JSXInternal.MouseEventHandler<HTMLButtonElement>
  colorVariant?: ColorSchemeVariant
  size?: ComponentSizeVariant
  variant?: 'minimal' | 'flat' | 'popup' | 'outline'
  isBordered?: boolean
  type?: 'submit' | 'button' | 'reset'
  rounded?: 'sm' | 'md' | 'lg' | 'full'
}

export const Button: FunctionComponent<ButtonProps> = props => {
  let colorVariant: ColorSchemeVariant | string = props.colorVariant ?? 'primary'
  let className: string
  let bordered: string

  colorVariant = colorVariant.charAt(0).toUpperCase() + colorVariant.slice(1)

  if (props.isBordered && props.variant !== 'outline') {
    switch (props.variant) {
    case 'flat':
      bordered = `ccButtonBordered ccButtonBorderedFlat${colorVariant}`
      break
    case 'popup': 
      bordered = `ccButtonBordered ccButtonBorderedPopup${colorVariant}`
      break
    }
  }

  className = ((props.className ? props.className : '') + ` ${bordered ?? ''}`).trim()

  return props.isBordered ?
    ProcButtonVariant(null, props.variant, props.type, colorVariant, props.size, props.rounded, className, 
      [
        <div className='ccButtonText'>
          {props.children}
        </div>,
        
      ], props.onClick)
    :
    ProcButtonVariant(props.children, props.variant, props.type, colorVariant, props.size, props.rounded, className, null, props.onClick)
}

function ProcButtonVariant(
  children: any,
  variant: 'flat' | 'popup' | 'outline' | 'minimal' = 'flat',
  buttonType: 'submit' | 'button' | 'reset',
  colorVariant: ColorSchemeVariant | string, 
  size: ComponentSizeVariant,
  rounded: 'sm' | 'md' | 'lg' | 'full',
  className: string,
  parentChildren?: JSXInternal.Element[],
  onClick?: JSXInternal.MouseEventHandler<HTMLButtonElement>) {

  const _variant = variant
  const _size = `ccButton-${size ?? 'md'}`
  const _rounded = rounded ? `ccButtonRounded-${rounded}` : ''

  let forBorderedButton: string = (`ccButton ccButton--${_variant} ${_rounded} ${className} ${_size} ${'ccButton' + colorVariant}`).trim()
  let forNoBorderButton: string = (`ccButton ccButton--${_variant} ${_rounded} ${className} ${_size} ${'ccButton' + colorVariant}`).trim()

  return parentChildren ?
    <button type={buttonType ?? 'button'} className={forBorderedButton} onClick={onClick}>
      {parentChildren}
      { variant == 'popup' ? <div className='ccButtonPop'></div> : <></> }
    </button>
    :
    <button type={buttonType ?? 'button'} className={forNoBorderButton} onClick={onClick}>
      <div className='ccButtonText'>
        {children}
      </div>
      { variant == 'popup' ? <div className='ccButtonPop'></div> : <></> }
    </button>
}
