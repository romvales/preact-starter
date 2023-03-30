
import { FunctionComponent } from 'preact'
import { useContext, useEffect, useRef } from 'preact/hooks'
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

type egapsProp = { egaps: string, from: number, current?: boolean, to: number }

export const EmploymentGapStep12: FunctionComponent<EmploymentGapStep9Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<egapsProp[]>(undefined)
  const formRef = useRef<HTMLFormElement>()

  const onGapCreate = () => {
    fcount.value = [ ...fcount.value, {
      egaps: null,
      from: null,
      to: null,
    } ]
  }

  const onGapRemove = (_i: number) => {
    fcount.value = fcount.value.filter((_, i) => i != _i)
    ctx.persistChange({ ...ctx.state.data, mprops: { ...ctx.state.data, mprops: { egaps: fcount.value } } })
  }
  
  const onControlStateChange = (ev: JSXInternal.TargetedEvent<HTMLFormElement | HTMLInputElement>) => {
    ev.preventDefault()
    
    const form = formRef.current.elements

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

        const newState = {
          mprops: {
            ...ctx.state.data.mprops,
            mprops: { egaps },
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

      <form 
        ref={formRef}
        className='onboardBuilderForm' 
        onSubmit={onControlStateChange}>
        {
          content?.forms ?
          <>
          {
            fcount.value?.map((item, i) => (
            <div key={i} className='onboardBuilderFormItem'>
              <CCLabel>
                {content.forms.fields.control1.label}
                <CCTextfield
                  value={item.egaps}
                  onInput={(ev: any) => { fcount.value[i].egaps = ev.target.value; onControlStateChange(ev) }}
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
                  onInput={e => { fcount.value[i].from = (e.target as any).value; onControlStateChange(e) }}
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
                  onInput={e => { fcount.value[i].to = (e.target as any).value; onControlStateChange(e) }}
                  required={item.to === 0 || item.to == null}
                  disabled={item.to === -1}
                  validate={content.forms.fields.control3.validate}
                  name={content.forms.fields.control3.name}
                  placeholder={content.forms.fields.control3.placeholder}></CCDatefield>
              </CCLabel>

              <CCButton
                onClick={() => onGapRemove(i)}
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