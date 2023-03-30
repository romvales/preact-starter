
import { FunctionComponent } from 'preact'
import { useContext, useRef } from 'preact/hooks'
import { 
  CCDatefield,
  CCLabel, 
  CCTextfield, 
  CCButton, 
  CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps, OnboardBuilder } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { formatDate, gatherNamedFormfields } from '.'

export type EducationStep5Props = {

}

export const EducationStep5: FunctionComponent<EducationStep5Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const formRef = useRef<HTMLFormElement>()

  const onControlStateChange = (ev: JSXInternal.TargetedEvent<HTMLFormElement | HTMLInputElement>) => {
    ev.preventDefault()

    const form = formRef.current.elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const name = fset.name.value
        const addrln = fset.addrln.value
        const from = fset.from.valueAsDate?.getTime()
        const to = fset.to.valueAsDate?.getTime()

        if (ctx.state.data.edu === undefined) ctx.setDataForm({ edu: [] })

        ctx.state.data.edu[0] = { 
          level: 'primary', 
          name, 
          addrln, 
          rng: [from, to],
        }

        if (ev.target instanceof HTMLFormElement) {
          ctx.next()
        } else {
          ctx.persistChange({ edu: ctx.state.data.edu })
        }
      })
  }

  const from = new Date(ctx.state.data?.edu[0]?.rng[0])
  const to = new Date(ctx.state.data?.edu[0]?.rng[1])

  return (
    <div className='onboard onboardBuilderEducation step5' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form 
        ref={formRef}
        className='onboardBuilderForm' 
        onSubmit={onControlStateChange}>
        Primary
        {
          content?.forms ?
          <>
          <CCLabel>
            {content.forms.fields.control1.label}
            <CCTextfield 
              value={ctx.state.data?.edu[0]?.name}
              pattern={content.forms.fields.control1.pattern}
              required={content.forms.fields.control1.required}
              validate={content.forms.fields.control1.validate}
              onInput={onControlStateChange}
              name={content.forms.fields.control1.name}
              placeholder={content.forms.fields.control1.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control2.label}
            <CCTextfield 
              value={ctx.state.data?.edu[0]?.addrln}
              pattern={content.forms.fields.control2.pattern}
              required={content.forms.fields.control2.required}
              validate={content.forms.fields.control2.validate}
              onInput={onControlStateChange}
              name={content.forms.fields.control2.name}
              placeholder={content.forms.fields.control2.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control3.label}
            <CCDatefield 
              value={formatDate(from)}
              required={content.forms.fields.control3.required}
              validate={content.forms.fields.control3.validate}
              onInput={onControlStateChange}
              name={content.forms.fields.control3.name}
              placeholder={content.forms.fields.control3.placeholder}></CCDatefield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control4.label}
            <CCDatefield 
              value={formatDate(to)}
              required={content.forms.fields.control4.required}
              validate={content.forms.fields.control4.validate}
              onInput={onControlStateChange}
              name={content.forms.fields.control4.name}
              placeholder={content.forms.fields.control4.placeholder}></CCDatefield>
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
