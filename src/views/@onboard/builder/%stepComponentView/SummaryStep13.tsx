
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
    const a = document.createElement('a')
    const location = window.location
    a.href = `/builder/preview/${ctx.state.uuid}`
    a.target = '_blank'
    a.click()
    ev.preventDefault()
    ctx.next()
  }

  return (
    <div className='onboard onboardBuilderSummary' role='article'>
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