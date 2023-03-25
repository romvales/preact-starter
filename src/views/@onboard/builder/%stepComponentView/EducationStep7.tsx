
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
import { contentProps } from '@/services/Builder'
import { CollegeDegreeEnum } from '@/helpers/constants/user-related-enums'

import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'

export type EducationStep7Props = {

}

export const EducationStep7: FunctionComponent<EducationStep7Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const name = fset.name.value
        const addrln = fset.addrln.value
        const degree = fset.degree.value
        const fstudy = fset.fstudy.value
        const from = fset.from.valueAsDate?.getTime()
        const to = fset.to.valueAsDate?.getTime()

        ctx.state.data.edu.push({
          level: 'college',
          name, 
          addrln,
          rng: [from, to],
          mprops: { degree, fstudy }
        })

        ctx.next()
      })
  }

  return (
    <div className='onboard onboardBuilderEducation step7' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        College
        {
          content?.forms ?
          <>
          <CCLabel>
            {content.forms.fields.control1.label}
            <CCTextfield 
              required
              validate={content.forms.fields.control1.validate}
              name={content.forms.fields.control1.name}
              placeholder={content.forms.fields.control1.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control2.label}
            <CCTextfield 
              required
              validate={content.forms.fields.control2.validate}
              name={content.forms.fields.control2.name}
              placeholder={content.forms.fields.control2.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control3.label}
            <select
              required
              noValidate={content.forms.fields.control3.validate}
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
              required
              validate={content.forms.fields.control4.validate}
              name={content.forms.fields.control4.name}
              placeholder={content.forms.fields.control4.placeholder}
              type='text'></CCTextfield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control5.label}
            <CCDatefield 
              required
              validate={content.forms.fields.control5.validate}
              name={content.forms.fields.control5.name}
              placeholder={content.forms.fields.control5.placeholder}></CCDatefield>
          </CCLabel>
          <CCLabel>
            {content.forms.fields.control6.label}
            <CCDatefield 
              required
              validate={content.forms.fields.control6.validate}
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
