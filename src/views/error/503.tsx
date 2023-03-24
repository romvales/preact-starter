

import { FunctionComponent } from 'preact'

export const route_options: RouteOptions = {
  name: 'maintenance',
  altUrl: '/error/maintenance',
  statusCode: 503,
}

const maintenance_route: FunctionComponent = props => {
  return (
    <>Maintenance works!</>
  )
}

export default maintenance_route
