
import { FunctionComponent } from 'preact'
import { StateUpdater, useContext } from 'preact/hooks'
import { CCLabel, CCTextfield, CCButton, CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps } from '@/services/Builder'


import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'
import { 
  RelationshipEnum, 
  CitizenshipEnum } from '@/helpers/constants/user-related-enums'

export type BasicInfoStep3Props = {

}

export const BasicInfoStep3: FunctionComponent<BasicInfoStep3Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const religion = fset.religion.value
        const cship = fset.cship.value as any
        const rstatus = fset.rstatus.value
        const children = fset.children.valueAsNumber

        ctx.setDataForm({ religion, cship, rstatus, children })
        ctx.next()
      })
  }

  return (
    <div className='onboard onboardBuilderBasicInfo step3' role='article'>

      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
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
              <select
                required
                defaultValue={'4'}
                noValidate={content.forms.fields.control2.validate}
                name={content.forms.fields.control2.name}
                placeholder={content.forms.fields.control2.placeholder}>
                {
                  Object.entries(CitizenshipEnum).map(([ name, value ]) => {
                    if (/[0-9]+/.test(name)) return

                    return (
                      <option value={value}>{name}</option>
                    )
                  })
                }
              </select>
            </CCLabel>
            <CCLabel>
              {content.forms.fields.control3.label}
              <select
                required
                noValidate={content.forms.fields.control3.validate}
                name={content.forms.fields.control3.name}
                placeholder={content.forms.fields.control3.placeholder}>
                {
                  Object.entries(RelationshipEnum).map(([ name, value ]) => {
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
                type='number'
                required
                validate={content.forms.fields.control4.validate}
                name={content.forms.fields.control4.name}
                placeholder={content.forms.fields.control4.placeholder}></CCTextfield>
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
