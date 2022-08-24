import { Router } from 'express'
import { readFileSync } from 'fs'
import path from 'path'

const ssrRouter = Router({ strict: true })

ssrRouter.get('**', async (req, res) => {
  res.set('Content-Type', 'text/html')
  res.send(readFileSync(path.resolve('dist', 'index.html')).toString())
  res.end()
})

export default ssrRouter
