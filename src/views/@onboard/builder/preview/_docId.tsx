import { useLayout } from '@/layouts'
import { UserResumeProp } from '@/types/props/user'
import { useSelector } from '@preact-hooks/unistore'
import { useSignal } from '@preact/signals'
import { FunctionComponent } from 'preact'
import { environment } from '@/helpers'

import { CVTemplate } from '../%stepComponentView/forms/CVTemplate'
import { BuilderService } from '@/services'

export type OnboardBuilderPreviewProps = {
  docId: string
}

type upropsType = { 
  uprops?: UserResumeProp<any> 
}

const onboard_builder_preview_route: FunctionComponent<OnboardBuilderPreviewProps> = props => {
  useLayout('plain')
  const uprops = useSignal<UserResumeProp<any>>({})

  if (props.docId) {
    useSelector<upropsType, any>(S => {
      if (environment.isServer) {
        try {
          const data = BuilderService.readDocJSON<any>(props.docId)
          uprops.value = S.uprops = data
        } catch {
          S.uprops = {}
        }
      } else {
        uprops.value = S.uprops
      }
    })
  }

  return (
    <>
      <CVTemplate uprops={uprops.value} />
    </>
  )
}

export default onboard_builder_preview_route
