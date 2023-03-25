
import { FunctionComponent } from 'preact'
import { StateUpdater, useContext, useEffect } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { useSignal } from '@preact/signals'
import { 
  CCCheckbox,
  CCLabel, 
  CCDatefield,
  CCTextfield, 
  CCButton, 
  CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps } from '@/services/Builder'
import { gatherNamedFormfields } from '.'

export type ExperienceStep9Props = {

}

type experienceFormFieldType = {
  uuid?: string
  title?: string
  company?: string
  addrln?: string
  mprops?: {
    resp?: string[]
    hcases?: string[]
  }
  from?: string
  current?: boolean
  to?: string
}

export const ExperienceStep9: FunctionComponent<ExperienceStep9Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<experienceFormFieldType[]>([])

  const onJobExpCreate = () => {
    fcount.value = [ ...fcount.value, {
      uuid: crypto.randomUUID(),
      title: null,
      company: null,
      mprops: {
        resp: [],
        hcases: [],
      },
      from: null,
      current: false,
      to: null,
    } ]
  }

  const onJobExpRemove = (uuid: string) => {
    fcount.value = fcount.value.filter(({ uuid: _uuid }) => _uuid !== uuid)
  }

  const onFormSubmit = (ev: JSXInternal.TargetedEvent) => {
    ev.preventDefault()

    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const exps = []

        let _title: HTMLInputElement[]
        let _company: HTMLInputElement[]
        let _addrln: HTMLInputElement[]
        let _from: HTMLInputElement[]
        let _to: HTMLInputElement[]

        if (fset.title instanceof RadioNodeList) {
          _title = fset.title as any
          _company = fset.company as any
          _addrln = fset.addrln as any
          _from = fset.from as any
          _to = fset.to as any
        } else {
          _title = fset.title ? [ fset.title ] : []
          _company = [ fset.company ]
          _addrln = [ fset.addrln ]
          _from = [ fset.from ]
          _to = [ fset.to ]
        }

        for (const [i, el] of Object.entries(_title)) {
          const title = el.value
          const company = _company[i].value
          const addrln = _addrln[i].value
          const from = _from[i]?.valueAsDate?.getTime()
          const to = !fcount.value[i].current ? _to[i]?.valueAsDate?.getTime() : -1
          const mprops = fcount.value[i]?.mprops

          exps.push({
            title, company, 
            addrln, mprops, 
            rng: [from, to],
          })
        }

        ctx.setDataForm({
          mprops: {
            ...ctx.state.data?.mprops,
            exps,
          }
        })

        ctx.next()
      })
  }

  const onJobExpCreateResp = (i: number) => {
    const obrTextarea: HTMLParagraphElement = document.querySelector(`.onboardBuilderFormItem-${i} .obrTextarea`)

    fcount.value = fcount.value.map((item, _i) => {
      if (_i != i) return item

      if (obrTextarea.textContent.length)
        item.mprops.resp.push(obrTextarea.textContent)

      return item
    })

    obrTextarea.innerHTML = ''
  }

  const onJobExpCreateCase = (i: number) => {
    const obhcaseInput: HTMLInputElement = document.querySelector(`.onboardBuilderFormItem-${i} .obhcaseInput`)
  
    fcount.value = fcount.value.map((item, _i) => {
      if (_i != i) return item

      if (obhcaseInput.value.length)
        item.mprops.hcases.push(obhcaseInput.value)

      return item
    })

    obhcaseInput.value = ''
  }

  const onCaseRemove = (i: number, j: number) => {
    fcount.value = fcount.value.map((item, _i) => {
      if (_i != i) return item
      item.mprops.hcases = item.mprops.hcases.filter((item, _j) => _j != j)
      return item
    })
  }

  const onRespRemove = (i: number, j: number) => {
    fcount.value = fcount.value.map((item, _i) => {
      if (_i != i) return item
      item.mprops.resp = item.mprops.resp.filter((item, _j) => _j != j)
      return item
    })
  }

  const onCboxChange = (i: number) => {
    fcount.value = fcount.value.map((item, _i) => {
      if (_i != i) return item
      item.current = !item.current
      return item
    })
  }

  useEffect(() => {
    onJobExpCreate()

  }, [])

  return (
    <div className='onboard onboardBuilderExperience' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        {
          content?.forms ?
            <>
              {
                fcount.value.map((item, i) => (
                <div className={`onboardBuilderFormItem-${i}`} key={item.uuid}>
                  <CCLabel>
                    {content.forms.fields.control1.label}
                    <CCTextfield 
                      value={item.title}
                      onInput={e => { fcount.value[i].title = (e.target as any).value; }}
                      required
                      validate={content.forms.fields.control1.validate}
                      name={content.forms.fields.control1.name}
                      placeholder={content.forms.fields.control1.placeholder}
                      type='text'></CCTextfield>
                  </CCLabel>
                  <CCLabel>
                    {content.forms.fields.control2.label}
                    <CCTextfield 
                      value={item.company}
                      onInput={e => { fcount.value[i].company = (e.target as any).value; }}
                      required
                      validate={content.forms.fields.control2.validate}
                      name={content.forms.fields.control2.name}
                      placeholder={content.forms.fields.control2.placeholder}
                      type='text'></CCTextfield>
                  </CCLabel>
                  <CCLabel>
                    {content.forms.fields.control3.label}
                    <CCTextfield 
                      value={item.addrln}
                      onInput={e => { fcount.value[i].addrln = (e.target as any).value; }}
                      required
                      validate={content.forms.fields.control3.validate}
                      name={content.forms.fields.control3.name}
                      placeholder={content.forms.fields.control3.placeholder}
                      type='text'></CCTextfield>
                  </CCLabel>

                  <CCLabel className='onboardBuilderRespWrapper'>
                    {content.forms.fields.control4.label}
                    <div className='onboardBuilderResp' role='textbox'>
                      <p className='obrTextarea' contentEditable></p>
                    </div>
                  </CCLabel>

                  <CCButton
                    onClick={() => onJobExpCreateResp(i)}
                    className='onboardAddButton onboardAddMiniAddButton'>
                    {content.forms.fields.control5.label}
                    <CCIcon
                      className='ml-2 w-1'
                      iconSet='heroicons/outline'
                      icon='plus-circle'
                      iconSize='sm'></CCIcon>
                  </CCButton>

                  <ul className='onboardBuilderRespItems'>
                    {
                      fcount.value[i].mprops.resp.map((resp, j) => (
                        <li key={j} className={`obrItem-${j}`}>
                          {resp}
                          <button
                            onClick={ev => { onRespRemove(i, j); ev.preventDefault() }}>
                            <CCIcon
                              className='ml-2 w-1'
                              iconSet='heroicons/outline'
                              icon='x-circle'
                              iconSize='sm'></CCIcon>
                          </button>
                        </li>
                      ))
                    }
                  </ul>
                  
                  <CCLabel>
                    {content.forms.fields.control6.label}
                    <CCTextfield 
                      className='obhcaseInput'
                      validate={content.forms.fields.control6.validate}
                      name={content.forms.fields.control6.name}
                      placeholder={content.forms.fields.control6.placeholder}
                      type='text'></CCTextfield>
                  </CCLabel>

                  <CCButton
                    onClick={() => onJobExpCreateCase(i)}
                    className='onboardAddButton onboardAddMiniAddButton'>
                    {content.forms.fields.control12.label}
                    <CCIcon
                      className='ml-2 w-1'
                      iconSet='heroicons/outline'
                      icon='plus-circle'
                      iconSize='sm'></CCIcon>
                  </CCButton>

                  <ul className='onboardBuilderHandledCases'>
                    {
                      fcount.value[i].mprops.hcases.map((_case, j) => (
                        <li key={j} className={`obhcItem-${j}`}>
                          {_case}
                          <button className='obchItemRemove' onClick={ev => { onCaseRemove(i, j); ev.preventDefault() }}>
                            <CCIcon
                              icon='minus-circle'
                              iconSet='heroicons/outline'
                              iconSize='sm'></CCIcon>
                          </button>
                        </li>
                      ))
                    }
                  </ul>

                  <CCLabel>
                    {content.forms.fields.control7.label}
                    <CCDatefield 
                      value={item.from}
                      onInput={e => { fcount.value[i].from = (e.target as any).value; }}
                      required
                      validate={content.forms.fields.control7.validate}
                      name={content.forms.fields.control7.name}
                      placeholder={content.forms.fields.control7.placeholder}></CCDatefield>
                  </CCLabel>

                  <CCLabel className='onboardBuilderFormExpCheckbox'>
                    <CCCheckbox
                      checked={item.current}
                      onChange={() => onCboxChange(i)}></CCCheckbox>
                    {content.forms.fields.control13.label}
                  </CCLabel>

                  <CCLabel>
                    {content.forms.fields.control8.label}
                    <CCDatefield 
                      disabled={item.current}
                      value={item.to}
                      required={!item.current}
                      onInput={e => { fcount.value[i].to = (e.target as any).value; }}
                      validate={content.forms.fields.control8.validate}
                      name={content.forms.fields.control8.name}
                      placeholder={content.forms.fields.control8.placeholder}></CCDatefield>
                  </CCLabel>

                  <CCButton
                    className='onboardRemoveButton'
                    rounded='md'
                    isBordered
                    colorVariant='error'
                    onClick={() => onJobExpRemove(item.uuid)}>
                    <CCIcon
                      className='mr-2'
                      iconSet='heroicons/outline'
                      icon='trash'
                      iconSize='sm'></CCIcon>
                    {content.forms.fields.control10.label}
                  </CCButton>
                </div>
                ))
              }

              <CCButton
                onClick={onJobExpCreate}
                className='onboardAddButton'>
                <CCIcon
                  className='mr-2'
                  iconSet='heroicons/outline'
                  icon='plus-circle'
                  iconSize='sm'></CCIcon>
                {content.forms.fields.control11.label}
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
