
import { FunctionComponent } from 'preact'

import { RemoteConfigService } from '@/services'

const monolith_index_route: FunctionComponent = props => {
  const config = (new RemoteConfigService).useConfig()

  return (
    <>{config.security.validHostnames}</>
  )
}

export default monolith_index_route