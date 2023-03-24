import '../../app.config'

import { isDevelopment } from '@/helpers'
import { ssrRouter } from './middlewares'

import morgan from 'morgan'
import express, { json } from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'

import { registerApiRouter } from '@/server/@api'

// @ts-ignore
import helmet, { HelmetOptions } from 'helmet'

const server = express()

if (isDevelopment) {
  const { setupDevMiddleware } = require('@/server/middlewares/setup-dev-router')
  setupDevMiddleware(server)
}

server.use(json({ type: 'application/json' }))
server.use(helmet(APP_CONFIG.helmetOptions as HelmetOptions))
server.use(cookieParser('', APP_CONFIG.cookieParserOptions))
server.use(morgan('dev', APP_CONFIG.morganOptions))

registerApiRouter(server)
server.use(express.static(path.resolve(isDevelopment ? '.dist' : 'dist'), { index: false }))
server.use(ssrRouter)

const RUNNING_SERVER = server.listen(APP_CONFIG.serverPort, APP_CONFIG.serverHost, () => {})

process.on('uncaughtException', (err: any) => {
  const ECODE = err.code

  switch (ECODE) {
  case 'ECONNREFUSED':
    
  default:
    console.log(err)
    RUNNING_SERVER.close()
  }

})
