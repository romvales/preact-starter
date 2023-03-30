import { FunctionComponent } from 'preact'
import { StateUpdater, useContext, useEffect, useRef } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import { CCLabel, CCTextfield, CCButton, CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps, OnboardBuilder } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'

export type SkillsStep10Props = {

}

export const SkillsStep10: FunctionComponent<SkillsStep10Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<{ skill: string, rating: number }[]>(undefined)
  const formRef = useRef<HTMLFormElement>()

  const onSkillCreate = () => {
    fcount.value = [ ...fcount.value, {
      skill: null,
      rating: 1,
    } ]
  }

  const onSkillRemove = (_i: number) => {
    fcount.value = fcount.value.filter((_, i) => i != _i)
    ctx.persistChange({ ...ctx.state.data, mprops: { ...ctx.state.data.mprops, skills: fcount.value } })
  }


  const onControlStateChange = (ev: JSXInternal.TargetedEvent) => {
    ev.preventDefault()
    
    const form = formRef.current.elements

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

        const newState = {
          mprops: {
            ...ctx.state.data.mprops,
            skills,
          },
        }

        if (ev.target instanceof HTMLFormElement) {
          ctx.setDataForm(newState)
          ctx.next()
        } else {
          ctx.persistChange(newState)
        }
      })
  }

  useEffect(() => {
    fcount.value = [ ...(ctx.state.data?.mprops.skills ?? []) ]
    if (!fcount.value.length) onSkillCreate()
    
  }, [ctx.state.data?.mprops.skills])

  return (
    <div className='onboard onboardBuilderSkills' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form 
        ref={formRef}
        className='onboardBuilderForm' 
        onSubmit={onControlStateChange}>
        {
          content?.forms ?
            <>
              {
                fcount.value?.map(({ skill, rating }, i) => (
                  <div className={`onboardBuilderFormItem-${i}`} key={i}>
                    <CCLabel>
                      {content.forms.fields.control1.label}
                      <CCTextfield 
                        value={skill}
                        onInput={ev => { fcount.value[i].skill = (ev.target as HTMLInputElement).value; onControlStateChange(ev) } }
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
                        value={rating}
                        min={1}
                        max={5}
                        onInput={ev => { fcount.value[i].rating = (ev.target as HTMLInputElement).valueAsNumber; onControlStateChange(ev) } }
                        required={content.forms.fields.control2.required}
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
                      onClick={() => onSkillRemove(i)}>
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