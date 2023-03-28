
import { FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'
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

export type EducationStep6Props = {

}

export const EducationStep6: FunctionComponent<EducationStep6Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const name = fset.name.value
        const addrln = fset.addrln.value
        const from = fset.from.valueAsDate?.getTime()
        const to = fset.to.valueAsDate?.getTime()

        ctx.state.data.edu[1] = {
          level: 'secondary',
          name, 
          addrln,
          rng: [from, to],
        }

        ctx.next()
      })
  }
  
  const from = new Date(ctx.state.data?.edu[1]?.rng[0])
  const to = new Date(ctx.state.data?.edu[1]?.rng[1])

  return (
    <div className='onboard onboardBuilderEducation step6' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        Secondary
        {
          content?.forms ?
          <>
          <CCLabel>
            {content.forms.fields.control1.label}
            <CCTextfield 
              value={ctx.state.data?.edu[1]?.name}
              pattern={content.forms.fields.control1.pattern}
              required={content.forms.fields.control1.required}
              validate={content.forms.fields.control1.validate}
              name={content.forms.fields.control1.name}
              placeholder={content.forms.fields.control1.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control2.label}
            <CCTextfield 
              value={ctx.state.data?.edu[1]?.addrln}
              pattern={content.forms.fields.control2.pattern}
              required={content.forms.fields.control2.required}
              validate={content.forms.fields.control2.validate}
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
              name={content.forms.fields.control3.name}
              placeholder={content.forms.fields.control3.placeholder}></CCDatefield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control4.label}
            <CCDatefield 
              value={formatDate(to)}
              required={content.forms.fields.control4.required}
              validate={content.forms.fields.control4.validate}
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
