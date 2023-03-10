import { NextFunction, Request, Response, Express } from 'express'
import { apiRouter } from './Router'

export function registerApiRouter(server: Express) {
  server.use(checkIfSubdomainIsApi)
}

export function checkIfSubdomainIsApi(req: Request, res: Response, next: NextFunction) {
  let nextRoute: any

  if (/^api\..+$/.test(req.hostname)) {
    nextRoute = apiRouter(req, res, next)
  } else {
    nextRoute = next()
  }

  return nextRoute
}

