
import { FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { CCButton, CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps, OnboardBuilder } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { initApiAxios } from '@/helpers/axios'

export type SummaryStep10Props = {}

export const SummaryStep13: FunctionComponent<SummaryStep10Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const apiEndpoint = initApiAxios()

  const onFormSubmit = async (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const uuid = ctx.state.uuid
    const pageUrl = `${window.location.origin}/builder/preview/${uuid}`
    const title = new URL(window.location.href).searchParams.get('cvResumeTitle') ?? ctx.state.data.mprops.exps[0].title

    await apiEndpoint.put(`/@onboard_builder/update/${uuid}`, { data: ctx.state.data })

    apiEndpoint.put('/print', { pageUrl, uuid, fname: ctx.state.data.fname, title }, { responseType: 'blob' })
      .then(res => {
        const fileUrl = URL.createObjectURL(res.data)
        const a = document.createElement('a')

        a.href = fileUrl
        a.target = '_blank'
        a.click()
        a.remove()
      })
  }

  return (
    <div className='onboard onboardBuilderSummary' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>
      
      <form className='onboardBuilderForm' onSubmit={onFormSubmit}>
        <CCButton
          rounded='md'
          variant='popup'
          type='submit'>
          <div className='ccButtonTextWrapper'>
            <span className='cbtwLabel'>
              Download CV
            </span>
          </div>
        </CCButton>
      </form>
    </div>
  )
}