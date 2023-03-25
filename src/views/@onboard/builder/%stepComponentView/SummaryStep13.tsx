
import { FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { CCButton, CCIcon } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { contentProps } from '@/services/Builder'
import { JSXInternal } from 'preact/src/jsx'
import { initApiAxios } from '@/helpers/axios'

export type SummaryStep10Props = {

}

export const SummaryStep13: FunctionComponent<SummaryStep10Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  const apiEndpoint = initApiAxios()

  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    const uuid = ctx.state.uuid
    const pageUrl = `${window.location.origin}/builder/preview/${uuid}`

    apiEndpoint.put('/print', { pageUrl, uuid }, { responseType: 'blob' })
      .then(res => {
        const fileUrl = URL.createObjectURL(res.data)
        const a = document.createElement('a')

        a.href = fileUrl
        a.target = '_blank'
        a.click()
        a.remove()
      })

    ev.preventDefault()
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