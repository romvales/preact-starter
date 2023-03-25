
import { FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'

import { CCButton } from '@/components/chunks'

import {
  BuilderContext,
} from '@/services'
import { JSXInternal } from 'preact/src/jsx'

export type RenderButtonProps = {

}

export const RenderButton: FunctionComponent<RenderButtonProps> = props => {
  const ctx = useContext(BuilderContext)

  const onRenderClick = (ev: JSXInternal.TargetedEvent<HTMLButtonElement>) => {
    

    ev.preventDefault()
  }
  
  return (
    <>
      <CCButton
        onClick={onRenderClick}>
        Render
      </CCButton>
    </>
  )
}