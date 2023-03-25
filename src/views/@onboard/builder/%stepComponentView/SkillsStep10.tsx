import { FunctionComponent } from 'preact'
import { StateUpdater, useContext, useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import { CCLabel, CCTextfield, CCButton, CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'

export type SkillsStep10Props = {

}

export const SkillsStep10: FunctionComponent<SkillsStep10Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<{ uuid: string, skill: string, rating: number }[]>([])

  const onSkillCreate = () => {
    fcount.value = [ ...fcount.value, {
      uuid: crypto.randomUUID(),
      skill: null,
      rating: null,
    } ]
  }

  const onSkillRemove = (uuid: string) => {
    fcount.value = fcount.value.filter(({ uuid: _uuid }) => _uuid != uuid)
  }


  const onFormSubmit = (ev: JSXInternal.TargetedEvent) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const skills = []

        let _skill: HTMLInputElement[]
        let _rating: HTMLInputElement[]

        if (fset.skill instanceof RadioNodeList) {
          _skill = fset.skill as any
          _rating = fset.rating as any
        } else {
          _skill = fset.skill ? [ fset.skill ] : []
          _rating = [ fset.rating ]
        }

        for (const [i, el] of Object.entries(_skill)) {
          const skill = el.value
          const rating = _rating[i].valueAsNumber

          skills.push({ skill, rating })
        }

        ctx.setDataForm({
          mprops: {
            ...ctx.state.data.mprops,
            skills,
          },
        })

        ctx.next()
      })
  }

  useEffect(() => {
    onSkillCreate()

  }, [])

  return (
    <div className='onboard onboardBuilderSkills' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        {
          content?.forms ?
            <>
              {
                fcount.value.map(({ uuid, skill, rating }, i) => (
                  <div className={`onboardBuilderFormItem-${i}`}>
                    <CCLabel>
                      {content.forms.fields.control1.label}
                      <CCTextfield 
                        validate={content.forms.fields.control1.validate}
                        name={content.forms.fields.control1.name}
                        placeholder={content.forms.fields.control1.placeholder}
                        type='text'></CCTextfield>
                    </CCLabel>
                    <CCLabel>
                      {content.forms.fields.control2.label}
                      <CCTextfield 
                        validate={content.forms.fields.control2.validate}
                        name={content.forms.fields.control2.name}
                        placeholder={content.forms.fields.control2.placeholder}
                        type='number'></CCTextfield>
                    </CCLabel>

                    <CCButton
                      className='onboardRemoveButton'
                      rounded='md'
                      isBordered
                      colorVariant='error'
                      onClick={() => onSkillRemove(uuid)}>
                      <CCIcon
                        className='mr-2'
                        iconSet='heroicons/outline'
                        icon='trash'
                        iconSize='sm'></CCIcon>
                      {content.forms.fields.control3.label}
                    </CCButton>
                  </div>
                ))
              }

              <CCButton
                onClick={onSkillCreate}
                className='onboardAddButton'>
                <CCIcon
                  className='mr-2'
                  iconSet='heroicons/outline'
                  icon='plus-circle'
                  iconSize='sm'></CCIcon>
                {content.forms.fields.control4.label}
              </CCButton>


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