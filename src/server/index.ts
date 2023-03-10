import '../../app.config'

import { isDevelopment } from '@/helpers/ssr-utils'
import { ssrRouter, setupDevMiddleware } from './middlewares'

import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import compression from 'compression'
import { registerApiRouter } from '@/server/@api'

// @ts-ignore
import helmet, { HelmetOptions } from 'helmet'

const server = express()

if (isDevelopment) setupDevMiddleware(server)

server.use(compression())
server.use(helmet(APP_CONFIG.helmetOptions as HelmetOptions))
server.use(cookieParser('', APP_CONFIG.cookieParserOptions))
server.use(morgan('dev', APP_CONFIG.morganOptions))

registerApiRouter(server)
server.use(express.static(path.resolve(isDevelopment ? '.dist' : 'dist'), { index: false }))
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
