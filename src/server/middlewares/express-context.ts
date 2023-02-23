// express-context.ts
//
// This utility can be used for managing the context of the express request and response lifecycle.
// There are many use cases this utility can fit. 
import { Context } from 'preact'

import routes from '@/views'
import { RouteProps, RouterOnChangeArgs, useRouter } from 'preact-router'
import { environment } from '@/helpers/ssr-utils'
import { useContext } from 'react'

// This utility is following the facade pattern. hence it is not convenient to use it,
//
const context = {
  _context: null,

  setContext<T>(ctx: Context<T>) {
    this._context = ctx
  },

  // Accessing the _context prop directly in this facade is considered an anti-pattern,
  // instead use this getter to access it from this object.
  getContext<T>() {
    return this._context as Context<T>
  },
}

export default context

export function getRouteByName(name: string): Route {
  for (const route of Object.values(routes)) {
    if (route.name === name) return route
  }

  throw new TypeError('route was not found')
}

export function handleInitialRouteRequest(route: RouterOnChangeArgs) {
  const [_route, setRoute] = useRouter()
  let wasNotFound = false

  // If `route.current` is undefined, it is considered that such path does not exist.
  if (route.current === undefined) {
    wasNotFound = true
  }

  if (wasNotFound) {
    if (environment.isServer) {
      const ctx = useContext(context.getContext<{ routeFound: boolean, statusCode: number }>())
      ctx.routeFound = false
      ctx.statusCode = 404
    } else {
      setTimeout(() => setRoute({ url: getRouteByName('not-found').path, replace: true }), 0)
    }
  }
}