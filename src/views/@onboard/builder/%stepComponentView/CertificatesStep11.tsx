import { FunctionComponent } from 'preact'
import { StateUpdater, useContext, useEffect } from 'preact/hooks'
import { CCLabel, CCTextfield, CCButton, CCIcon } from '@/components/chunks'
import { useSignal } from '@preact/signals'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'

export type CertificatesStep11Props = {

}

export const CertificatesStep11: FunctionComponent<CertificatesStep11Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const fcount = useSignal<{ uuid: string, cert: string, year: number }[]>([])

  const onCertCreate = () => {
    fcount.value = [ ...fcount.value, {
      uuid: crypto.randomUUID(),
      cert: null,
      year: null,
    } ]
  }

  const onCertRemove = (uuid: string) => {
    fcount.value = fcount.value.filter(({ uuid: _uuid }) => _uuid !== uuid)
  }

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then(fset => {
        const certs = []
        
        let _cert: HTMLInputElement[]
        let _year: HTMLInputElement[]

        if (fset.cert instanceof RadioNodeList) {
          _cert = fset.cert as any
          _year = fset.year as any
        } else {
          _cert = fset.cert ? [ fset.cert ] : []
          _year = [ fset.year ]
        }

        for (const [i, el] of Object.entries(_cert)) {
          const cert = el.value
          const year = _year[i].value

          certs.push({ cert, year })
        }

        ctx.setDataForm({
          mprops: {
            ...ctx.state.data.mprops,
            certs,
          }
        })

        ctx.next()
      })
  }

  useEffect(() => {
    onCertCreate()

  }, [])
  
  return (
    <div className='onboard onboardBuilderCertificate'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        {
          content?.forms ?
            <>
              {
                fcount.value.map(({ uuid, cert, year }, i) => (
                <div className={`onboardBuilderFormItem-${i}`}>
                  <CCLabel>
                    {content.forms.fields.control1.label}
                    <CCTextfield 
                      value={cert}
                      onInput={e => { fcount.value[i].cert = (e.target as any).value; }}
                      required
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
                      required
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
                    onClick={() => onCertRemove(uuid)}>
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
                onClick={onCertCreate}
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