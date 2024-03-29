
import { FunctionComponent } from 'preact'
import { useContext, useRef } from 'preact/hooks'

import {
  BuilderService,
  BuilderContext } from '@/services'

import { contentProps } from '@/services/Builder'

import { CCLabel, CCTextfield, CCButton, CCIcon } from '@/components/chunks'
import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'
import { CountryEnum } from '@/helpers/constants/user-related-enums'

export type AddressStep4Props = {

}

export const AddressStep4: FunctionComponent<AddressStep4Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const formRef = useRef<HTMLFormElement>()

  const onControlStateChange = (ev: JSXInternal.TargetedEvent<HTMLFormElement | HTMLInputElement | HTMLSelectElement>) => {
    ev.preventDefault()

    const form = formRef.current.elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const ccountry = fset.country[0].value
        const ccity = fset.city[0].value
        const cstreet = fset.street[0].value
        const chouseAptId = fset.houseAptId[0].value
        
        const pcountry = fset.country[1].value
        const pcity = fset.city[1].value
        const pstreet = fset.street[1].value
        const phouseAptId = fset.houseAptId[1].value

        const newState = {
          addrs: [
            {
              type: 'current',
              country: ccountry,
              city: ccity,
              street: cstreet,
              houseAptId: chouseAptId,
            },
            {
              type: 'permanent',
              country: pcountry,
              city: pcity,
              street: pstreet,
              houseAptId: phouseAptId,
            }
          ]
        }

        if (ev.target instanceof HTMLFormElement) {
          ctx.setDataForm(newState)
          ctx.next()
        } else {
          ctx.persistChange(newState)
        }
      })
  }

  return (
    <div className='onboard onboardBuilderAddress' role='article'>
      
      <form 
        ref={formRef}
        className='onboardBuilderForm' 
        onSubmit={onControlStateChange}>
        {
          content?.forms ?
          <>
          <div className='obf-addressLabel'>
            Current Address
            <div className='addressLabelSeparator'></div>
          </div>
          <CCLabel>
            {content.forms.fields.control1.label}
            <select
              value={ctx.state.data?.addrs[0]?.country ?? 136}
              onChange={onControlStateChange}
              required={content.forms.fields.control1.required}
              noValidate={content.forms.fields.control1.validate}
              name={content.forms.fields.control1.name}
              placeholder={content.forms.fields.control1.placeholder}>
              {
                Object.entries(CountryEnum).map(([ name, value ]) => {
                  if (/[0-9]+/.test(name)) return

                  return (
                    <option value={value}>{name}</option>
                  )
                })
              }
            </select>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control2.label}
            <CCTextfield 
              onInput={onControlStateChange}
              value={ctx.state.data?.addrs[0]?.city}
              pattern={content.forms.fields.control2.pattern}
              required={content.forms.fields.control2.required}
              validate={content.forms.fields.control2.validate}
              name={content.forms.fields.control2.name}
              placeholder={content.forms.fields.control2.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control3.label}
            <CCTextfield 
              onInput={onControlStateChange}
              value={ctx.state.data?.addrs[0]?.street}
              pattern={content.forms.fields.control3.pattern}
              required={content.forms.fields.control3.validate}
              validate={content.forms.fields.control3.validate}
              name={content.forms.fields.control3.name}
              placeholder={content.forms.fields.control3.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control4.label}
            <CCTextfield 
              onInput={onControlStateChange}
              value={ctx.state.data?.addrs[0]?.houseAptId}
              pattern={content.forms.fields.control4.pattern}
              required={content.forms.fields.control4.required}
              validate={content.forms.fields.control4.validate}
              name={content.forms.fields.control4.name}
              placeholder={content.forms.fields.control4.placeholder}
              type='text'></CCTextfield>
          </CCLabel>

          <div className='obf-addressLabel'>
            Permanent Address
            <div className='addressLabelSeparator'></div>
          </div>
          <CCLabel>
            {content.forms.fields.control1.label}
            <select
              onChange={onControlStateChange}
              value={ctx.state.data?.addrs[1]?.country ?? 136}
              required={content.forms.fields.control1.required}
              noValidate={content.forms.fields.control1.validate}
              name={content.forms.fields.control1.name}
              placeholder={content.forms.fields.control1.placeholder}>
              {
                Object.entries(CountryEnum).map(([ name, value ]) => {
                  if (/[0-9]+/.test(name)) return

                  return (
                    <option value={value}>{name}</option>
                  )
                })
              }
            </select>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control2.label}
            <CCTextfield 
              onInput={onControlStateChange}
              value={ctx.state.data?.addrs[1]?.city}
              pattern={content.forms.fields.control2.pattern}
              required={content.forms.fields.control2.required}
              validate={content.forms.fields.control2.validate}
              name={content.forms.fields.control2.name}
              placeholder={content.forms.fields.control2.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control3.label}
            <CCTextfield 
              onInput={onControlStateChange}
              value={ctx.state.data?.addrs[1]?.street}
              pattern={content.forms.fields.control3.pattern}
              required={content.forms.fields.control3.required}
              validate={content.forms.fields.control3.validate}
              name={content.forms.fields.control3.name}
              placeholder={content.forms.fields.control3.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control4.label}
            <CCTextfield 
              onInput={onControlStateChange}
              value={ctx.state.data?.addrs[1]?.houseAptId}
              pattern={content.forms.fields.control4.pattern}
              required={content.forms.fields.control4.required}
              validate={content.forms.fields.control4.validate}
              name={content.forms.fields.control4.name}
              placeholder={content.forms.fields.control4.placeholder}
              type='text'></CCTextfield>
          </CCLabel>

          <CCButton
            rounded='md'
            variant='popup'
            type='submit'>
            <div className='ccButtonTextWrapper'>
              <span className='cbtwLabel'>
                {content.forms.submitText}
              </span>
              <CCIcon 
                iconSet='heroicons/solid' 
                icon='arrow-small-right' 
                iconSize='sm'></CCIcon>
            </div>
          </CCButton>
          </>
          :
          <></>
        }
      </form>
    </div>
  )
}