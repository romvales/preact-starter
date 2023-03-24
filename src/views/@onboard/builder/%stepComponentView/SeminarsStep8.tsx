
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

export type SeminarsStep8Props = {}

export const SeminarsStep8: FunctionComponent<SeminarsStep8Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<{ uuid: string, name: string, year: number }[]>([])

  const onIncrementFcount = () => {
    fcount.value = [ ...fcount.value, {
      uuid: crypto.randomUUID(),
      name: null,
      year: null
    } ]
  }

  const onRemove = (uuid: string) => {
    fcount.value = fcount.value.filter(({ uuid: _uuid }) => _uuid != uuid)
  }

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()

    const form = (ev.target as HTMLFormElement).elements

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

        ctx.setDataForm({
          mprops: { seminars },
        })
        ctx.next()
      })
  }

  useEffect(() => {
    onIncrementFcount()


  }, [])

  return (
    <div className='onboard onboardBuilderSeminars' role='article'>
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        {
          content?.forms ?
            <>
            {
              fcount.value.map(({ uuid, name, year }, i) => {
                return (
                  <div className={`onboardBuilderFormItem-${i}`} key={uuid}>
                    <CCLabel>
                      {content.forms.fields.control1.label}
                      <CCTextfield 
                        value={name}
                        onInput={e => { fcount.value[i].name = (e.target as any).value; }}
                        validate={content.forms.fields.control1.validate}
                        name={content.forms.fields.control1.name}
                        placeholder={content.forms.fields.control1.placeholder}
                        type='text'></CCTextfield>
                    </CCLabel>
                    <CCLabel>
                      {content.forms.fields.control2.label}
                      <CCTextfield 
                        value={year}
                        onInput={e => { fcount.value[i].year = (e.target as any).value; }}
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
                      onClick={() => onRemove(uuid)}>
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
