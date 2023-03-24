

import { FunctionComponent } from 'preact'

export const route_options: RouteOptions = {
  name: 'not-found',
  altUrl: '/error/page-not-found',
  statusCode: 404,
}

const not_found_route: FunctionComponent = props => {
  return (
    <>Not found works!</>
  )
}

export default not_found_route
