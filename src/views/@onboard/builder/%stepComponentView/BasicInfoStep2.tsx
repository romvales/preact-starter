
import { FunctionComponent } from 'preact'
import { StateUpdater, useContext } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'

import {
  BuilderContext,
  BuilderService } from '@/services'

import { contentProps } from '@/services/Builder'



import { 
  CCLabel, 
  CCTextfield, 
  CCButton, 
  CCDatefield,
  CCIcon } from '@/components/chunks'
import { gatherNamedFormfields } from '.'

export type BasicInfoStep2Props = {

}

export const BasicInfoStep2: FunctionComponent<BasicInfoStep2Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()

  console.log(ctx.state)

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const bdate = fset.bdate.valueAsDate
        const bplace = fset.bplace.value

        ctx.setDataForm({ bdate: bdate?.getTime(), bplace })
        ctx.next()
      })
  }

  return (
    <div className='onboard onboardBuilderBasicInfo step2' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        {
          content?.forms ? 
            <>
            <CCLabel>
              {content.forms.fields.control1.label}
              <CCDatefield 
                required
                validate={content.forms.fields.control1.validate}
                name={content.forms.fields.control1.name}
                placeholder={content.forms.fields.control1.placeholder}></CCDatefield>
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
