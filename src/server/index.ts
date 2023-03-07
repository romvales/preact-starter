import '../../app.config'
import { isDevelopment } from '@/helpers/ssr-utils'
import expressCtx from '@/server/middlewares/express-context'
import { ssrRouter, setupDevMiddleware } from './middlewares'
import { useContext } from 'preact/hooks'

// import apiRouter from './api'
import morgan from 'morgan'
import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import compression from 'compression'

// @ts-ignore
import helmet, { HelmetOptions } from 'helmet'

const server = express()

if (isDevelopment) {
  setupDevMiddleware(server)
}

server.use(compression())
server.use(helmet(APP_CONFIG.helmetOptions as HelmetOptions))
server.use(cookieParser('', APP_CONFIG.cookieParserOptions))
server.use(morgan('dev', APP_CONFIG.morganOptions))
server.use(express.static(path.resolve('dist'), { index: false }))

// server.use('/api', apiRouter)
server.use(ssrRouter)

server.listen(APP_CONFIG.serverPort, APP_CONFIG.serverHost, () => {})

process.on('uncaughtException', (err: any) => {
  const ECODE = err.code

  switch (ECODE) {
  case 'ECONNREFUSED':
    
  default:
    console.error(err)
  }

})
