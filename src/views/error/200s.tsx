

import { FunctionComponent } from 'preact'

export const route_options: RouteOptions = {
  name: 'thank-you',
  altUrl: '/message/thank-you',
  statusCode: 200,
}

const thank_you_route: FunctionComponent = props => {
  return (
    <>Thank you works!</>
  )
}

export default thank_you_route