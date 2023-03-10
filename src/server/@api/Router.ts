
import { Request, Response, Router } from 'express'

export const apiRouter = Router({ strict: true, caseSensitive: true })

apiRouter.get('/', (req: Request, res: Response) => {
  res.json({ date: new Date() })
})