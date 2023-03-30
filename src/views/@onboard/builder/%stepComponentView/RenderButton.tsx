
import { FunctionComponent } from 'preact'
import { useContext, useRef } from 'preact/hooks'

import { CCButton, CCPortal } from '@/components/chunks'

import {
  BuilderContext,
} from '@/services'
import { JSXInternal } from 'preact/src/jsx'
import { initApiAxios } from '@/helpers/axios'

export type RenderButtonProps = {

}

export const RenderButton: FunctionComponent<RenderButtonProps> = props => {
  const ctx = useContext(BuilderContext)
  const iframeRef = useRef<HTMLIFrameElement>()

  const onRenderClick = async (ev: JSXInternal.TargetedEvent<HTMLButtonElement>) => {
    ev.preventDefault()
    const apiEndpoint = initApiAxios()

    await apiEndpoint.put(`/@onboard_builder/update/${ctx.state.uuid}`, { data: ctx.state.data })

    iframeRef.current.contentWindow.location.reload()
  }
  
  return (
    <>
      <CCPortal selector='.onboardRenderPreview'>
        <iframe className='orpFrame' src={`/builder/preview/${ctx.state.uuid}`} ref={iframeRef}>
        </iframe>
      </CCPortal>
      <CCButton
        onClick={onRenderClick}>
        Render
      </CCButton>
    </>
  )
}