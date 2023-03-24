
import { FunctionComponent } from 'preact'

export const route_options: RouteOptions = {
  name: 'internal-server-error',
  altUrl: '/error/offline',
  statusCode: 503,
}

const offline_route: FunctionComponent = props => {
  return (
    <>Offline works!</>
  )
}

export default offline_route