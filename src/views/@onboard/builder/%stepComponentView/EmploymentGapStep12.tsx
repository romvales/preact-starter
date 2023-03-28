
import { FunctionComponent } from 'preact'
import { useContext, useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'

import {
  CCIcon,
  CCLabel,
  CCCheckbox,
  CCTextfield,
  CCDatefield,
  CCButton } from '@/components/chunks'

import { 
  BuilderService,
  BuilderContext } from '@/services'
import { contentProps } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { formatDate, gatherNamedFormfields } from '.'

export type EmploymentGapStep9Props = {
  
}

type egapsProp = { uuid: string, egaps: string, from: number, current?: boolean, to: number }

export const EmploymentGapStep12: FunctionComponent<EmploymentGapStep9Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<egapsProp[]>(undefined)

  const onGapCreate = () => {
    fcount.value = [ ...fcount.value, {
      uuid: crypto.randomUUID(),
      egaps: null,
      from: null,
      to: null,
    } ]
  }

  const onGapRemove = (uuid: string) => {
    fcount.value = fcount.value.filter(item => item.uuid != uuid)
  }
  
  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const egaps = []
        
        let _egaps: HTMLInputElement[]
        let _from: HTMLInputElement[]
        let _to: HTMLInputElement[]

        if (fset.egaps instanceof RadioNodeList) {
          _egaps = fset.egaps as any
          _from = fset.from as any
          _to = fset.to as any
        } else {
          _egaps = fset.egaps ? [ fset.egaps ] : []
          _from = [ fset.from ]
          _to = [ fset.to ]
        }

        for (const [i, el] of Object.entries(_egaps)) {
          const egap = el.value
          const from = _from[i].valueAsDate?.getTime()
          const to = _to[i].valueAsDate?.getTime() ?? -1

          egaps.push({ egaps: egap, from, to })
        }

        ctx.setDataForm({
          mprops: {
            ...ctx.state.data.mprops,
            mprops: { egaps },
          },
        })
        
        ctx.next()
      })
  }

  const onCboxChange = (i: number) => {
    fcount.value = fcount.value.map((item, _i) => {
      if (_i != i) return item

      item.to = item.to == -1 ? 0 : -1

      return item
    })
  }

  useEffect(() => {
    fcount.value = [ ...(ctx.state.data?.mprops?.mprops?.egaps ?? []) ]

  }, [ctx.state.data?.mprops?.mprops?.egaps])
  
  return (
    <div className='onboard onboardBuilderSkills' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>

      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        {
          content?.forms ?
          <>
          {
            fcount.value?.map((item, i) => (
            <div key={item.uuid} className='onboardBuilderFormItem'>
              <CCLabel>
                {content.forms.fields.control1.label}
                <CCTextfield
                  value={item.egaps}
                  onInput={(ev: any) => fcount.value[i].egaps = ev.target.value}
                  required={content.forms.fields.control1.required}
                  validate={content.forms.fields.control1.validate}
                  name={content.forms.fields.control1.name}
                  placeholder={content.forms.fields.control1.placeholder}
                  type='text'></CCTextfield>
              </CCLabel>

              <CCLabel>
                {content.forms.fields.control2.label}
                <CCDatefield 
                  value={item.from ? formatDate(new Date(item.from)) : ''}
                  onInput={e => { fcount.value[i].from = (e.target as any).value; }}
                  required={content.forms.fields.control2.required}
                  validate={content.forms.fields.control2.validate}
                  name={content.forms.fields.control2.name}
                  placeholder={content.forms.fields.control2.placeholder}></CCDatefield>
              </CCLabel>

              <CCLabel className='onboardBuilderFormExpCheckbox'>
                <CCCheckbox
                  checked={item.to === -1}
                  onChange={() => onCboxChange(i)}></CCCheckbox>
                {content.forms.fields.control6.label}
              </CCLabel>

              <CCLabel>
                {content.forms.fields.control3.label}
                <CCDatefield 
                  value={item.to !== 0 && item.to !== -1 && item.to !== null ? formatDate(new Date(item.to)) : ''}
                  onInput={e => { fcount.value[i].to = (e.target as any).value; }}
                  required={item.to === 0 || item.to == null}
                  disabled={item.to === -1}
                  validate={content.forms.fields.control3.validate}
                  name={content.forms.fields.control3.name}
                  placeholder={content.forms.fields.control3.placeholder}></CCDatefield>
              </CCLabel>

              <CCButton
                onClick={() => onGapRemove(item.uuid)}
                className='onboardRemoveButton'
                rounded='md'
                isBordered
                colorVariant='error'>
                <CCIcon
                  className='mr-2'
                  iconSet='heroicons/outline'
                  icon='trash'
                  iconSize='sm'></CCIcon>
                {content.forms.fields.control4.label}
              </CCButton>
            </div>
            ))
          }

          <CCButton
            onClick={onGapCreate}
            className='onboardAddButton'>
            <CCIcon
              className='mr-2'
              iconSet='heroicons/outline'
              icon='plus-circle'
              iconSize='sm'></CCIcon>
            {content.forms.fields.control5.label}
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