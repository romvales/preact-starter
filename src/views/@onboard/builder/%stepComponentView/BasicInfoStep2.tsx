
import { FunctionComponent } from 'preact'
import { StateUpdater, useContext, useRef } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'

import {
  BuilderContext,
  BuilderService } from '@/services'

import { contentProps, OnboardBuilder } from '@/services/Builder'



import { 
  CCLabel, 
  CCTextfield, 
  CCButton, 
  CCDatefield,
  CCIcon } from '@/components/chunks'
import { formatDate, gatherNamedFormfields } from '.'

export type BasicInfoStep2Props = {

}

export const BasicInfoStep2: FunctionComponent<BasicInfoStep2Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const formRef = useRef<HTMLFormElement>()

  const onControlStateChange = (ev: JSXInternal.TargetedEvent<HTMLFormElement | HTMLInputElement>) => {
    ev.preventDefault()
    
    const form = formRef.current.elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const bdate = fset.bdate.valueAsDate
        const bplace = fset.bplace.value

        const newState = { bdate: bdate?.getTime(), bplace }

        if (ev.target instanceof HTMLFormElement) {
          ctx.setDataForm(newState)
          ctx.next()
        } else {
          ctx.persistChange(newState)
        }
      })
  }

  const bdate = new Date(ctx.state.data?.bdate)

  return (
    <div className='onboard onboardBuilderBasicInfo step2' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form
        ref={formRef}
        className='onboardBuilderForm' 
        onSubmit={onControlStateChange}>
        {
          content?.forms ? 
            <>
            <CCLabel>
              {content.forms.fields.control1.label}
              <CCDatefield
                value={bdate.getTime() != -1 && !isNaN(bdate.getTime()) ? formatDate(bdate) : null} 
                onChange={onControlStateChange}
                required={content.forms.fields.control1.required}
                validate={content.forms.fields.control1.validate}
                name={content.forms.fields.control1.name}
                placeholder={content.forms.fields.control1.placeholder}></CCDatefield>
            </CCLabel>

            <CCLabel>
              {content.forms.fields.control2.label}
              <CCTextfield 
                value={ctx.state.data?.bplace}
                onInput={onControlStateChange}
                pattern={content.forms.fields.control2.pattern}
                required={content.forms.fields.control2.required}
                validate={content.forms.fields.control2.validate}
                name={content.forms.fields.control2.name}
                placeholder={content.forms.fields.control2.placeholder}
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
            <>

            </>
        }
      </form>
    </div>
  )
}
