
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
import { CollegeDegreeEnum } from '@/helpers/constants/user-related-enums'

import { JSXInternal } from 'preact/src/jsx'
import { formatDate, gatherNamedFormfields } from '.'

export type EducationStep7Props = {

}

export const EducationStep7: FunctionComponent<EducationStep7Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const formRef = useRef<HTMLFormElement>()

  const onControlStateChange = (ev: JSXInternal.TargetedEvent<HTMLFormElement | HTMLInputElement | HTMLSelectElement>) => {
    ev.preventDefault()
    
    const form = formRef.current.elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const name = fset.name.value
        const addrln = fset.addrln.value
        const degree = fset.degree.value
        const fstudy = fset.fstudy.value
        const from = fset.from.valueAsDate?.getTime()
        const to = fset.to.valueAsDate?.getTime()

        ctx.state.data.edu[2] = {
          level: 'college',
          name, 
          addrln,
          rng: [from, to],
          mprops: { degree, fstudy }
        }

        if (ev.target instanceof HTMLFormElement) {
          ctx.next()
        } else {
          ctx.persistChange({ edu: ctx.state.data.edu })
        }
      })
  }

  const from = new Date(ctx.state.data?.edu[2]?.rng[0])
  const to = new Date(ctx.state.data?.edu[2]?.rng[1])

  return (
    <div className='onboard onboardBuilderEducation step7' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form 
        ref={formRef}
        className='onboardBuilderForm' 
        onSubmit={onControlStateChange}>
        College
        {
          content?.forms ?
          <>
          <CCLabel>
            {content.forms.fields.control1.label}
            <CCTextfield 
              value={ctx.state.data?.edu[2]?.name}
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
              value={ctx.state.data?.edu[2]?.addrln}
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
            <select
              value={ctx.state.data?.edu[2]?.mprops.degree}
              required={content.forms.fields.control3.required}
              noValidate={content.forms.fields.control3.validate}
              onChange={onControlStateChange}
              name={content.forms.fields.control3.name}
              placeholder={content.forms.fields.control3.placeholder}>
              {
                Object.entries(CollegeDegreeEnum).map(([ name, value ]) => {
                  if (/[0-9]+/.test(name)) return

                  return (
                    <option value={value}>{name}</option>
                  )
                })
              }
            </select>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control4.label}
            <CCTextfield 
              value={ctx.state.data?.edu[2]?.mprops.fstudy}
              pattern={content.forms.fields.control4.pattern}
              required={content.forms.fields.control4.required}
              validate={content.forms.fields.control4.validate}
              onInput={onControlStateChange}
              name={content.forms.fields.control4.name}
              placeholder={content.forms.fields.control4.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control5.label}
            <CCDatefield 
              value={formatDate(from)}
              required={content.forms.fields.control5.required}
              validate={content.forms.fields.control5.validate}
              onInput={onControlStateChange}
              name={content.forms.fields.control5.name}
              placeholder={content.forms.fields.control5.placeholder}></CCDatefield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control6.label}
            <CCDatefield 
              value={formatDate(to)}
              required={content.forms.fields.control6.required}
              validate={content.forms.fields.control6.validate}
              onChange={onControlStateChange}
              name={content.forms.fields.control6.name}
              placeholder={content.forms.fields.control6.placeholder}></CCDatefield>
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
