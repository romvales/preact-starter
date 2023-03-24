// express-context.ts
//
// This utility can be used for managing the context of the express request and response lifecycle.
// There are many use cases this utility can fit. 
import { Context } from 'preact'


import { RouterOnChangeArgs, useRouter } from 'preact-router'
import { environment, getRouteUrlByName, __mapViewRoutes } from '@/helpers'
import { useContext } from 'react'
// import { useViewBySubdomain } from '@/views'

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

export function handleInitialRouteRequest(route: RouterOnChangeArgs) {
  const [_route, setRoute] = useRouter()
  let wasNotFound = false

  // If `route.current` is undefined, it is considered that such path does not exist.
  if (route.current === undefined) wasNotFound = true

  if (wasNotFound)
    if (environment.isServer) {
      const ctx = useContext(context.getContext<{ routeFound: boolean, statusCode: number }>())
      ctx.routeFound = false
      ctx.statusCode = 404

    } else {
      setTimeout(() => setRoute({ url: getRouteUrlByName('not-found'), replace: true }), 0)
    }

}