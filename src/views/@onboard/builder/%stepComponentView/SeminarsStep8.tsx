
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

export type SeminarsStep8Props = {}

export const SeminarsStep8: FunctionComponent<SeminarsStep8Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<{ seminar: string, year: number }[]>(undefined)
  const formRef = useRef<HTMLFormElement>()

  const onIncrementFcount = () => {
    fcount.value = [ ...fcount.value, {
      seminar: null,
      year: null,
    } ]
  }

  const onRemove = (_i: number) => {
    fcount.value = fcount.value.filter((_, i) => _i != i)
    ctx.persistChange({ ...ctx.state.data, mprops: { ...ctx.state.data.mprops, seminars: fcount.value } })
  }

  const onControlStateChange = (ev: JSXInternal.TargetedEvent<HTMLFormElement | HTMLInputElement>) => {
    ev.preventDefault()

    const form = formRef.current.elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const seminars = []

        let _seminar: HTMLInputElement[]
        let _year: HTMLInputElement[]

        if (fset.seminar instanceof RadioNodeList) {
          _seminar = fset.seminar as any
          _year = fset.year as any
        } else {
          _seminar = fset.seminar ? [ fset.seminar ] : []
          _year = [ fset.year ]
        }

        for (const [i, el] of Object.entries(_seminar)) {
          const seminar = el.value
          const year = _year[i].value
          seminars.push({ seminar, year })
        }

        const newState = {
          mprops: { ...ctx.state.data.mprops, seminars },
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
    fcount.value = ctx.state.data?.mprops.seminars ?? []
    if (fcount.value.length == 0) onIncrementFcount()
  }, [ctx.state.data?.mprops.seminars])

  return (
    <div className='onboard onboardBuilderSeminars' role='article'>
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
              fcount.value?.map(({ seminar, year }, i) => {
                return (
                  <div className={`onboardBuilderFormItem-${i}`} key={i}>
                    <CCLabel>
                      {content.forms.fields.control1.label}
                      <CCTextfield 
                        value={seminar}
                        onInput={e => { fcount.value[i].seminar = (e.target as any).value; onControlStateChange(e) }}
                        required={content.forms.fields.control1.required}
                        validate={content.forms.fields.control1.validate}
                        name={content.forms.fields.control1.name}
                        placeholder={content.forms.fields.control1.placeholder}
                        type='text'></CCTextfield>
                    </CCLabel>
                    <CCLabel>
                      {content.forms.fields.control2.label}
                      <CCTextfield 
                        value={year}
                        onInput={e => { fcount.value[i].year = (e.target as any).value; onControlStateChange(e) }}
                        required={content.forms.fields.control2.required}
                        validate={content.forms.fields.control2.validate}
                        name={content.forms.fields.control2.name}
                        placeholder={content.forms.fields.control2.placeholder}
                        type='text'></CCTextfield>
                    </CCLabel>

                    <CCButton
                      className='onboardRemoveButton'
                      rounded='md'
                      isBordered
                      colorVariant='error'
                      onClick={() => onRemove(i)}>
                      <CCIcon
                        className='mr-2'
                        iconSet='heroicons/outline'
                        icon='trash'
                        iconSize='sm'></CCIcon>
                      {content.forms.fields.control3.label}
                    </CCButton>
                  </div>
                )
              })
            }

              <CCButton
                className='onboardAddButton'
                onClick={onIncrementFcount}>
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
