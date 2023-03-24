
import { FunctionComponent } from 'preact'

export const route_options: RouteOptions = {
  name: 'internal-server-error',
  altUrl: '/error/internal-server-failure',
  statusCode: 500,
}

const internal_server_error_route: FunctionComponent = props => {
  
  return (
    <>Internal server failure works!</>
  )
}

export default internal_server_error_route