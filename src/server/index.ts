import '../../app.config'
import { isDevelopment } from '@/helpers/ssr-utils'
import { setupDevMiddleware, ssrRouter } from './middlewares'
import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'

// @ts-ignore
import helmet from 'helmet'

const server = express()

setupDevMiddleware(server)

server.use(helmet(APP_CONFIG.helmetOptions))
server.use(cookieParser('', APP_CONFIG.cookieParserOptions))
server.use(morgan('dev', APP_CONFIG.morganOptions))

server.use(express.static(path.resolve('dist'), { index: false }))
server.use(ssrRouter)

server.listen(APP_CONFIG.serverPort, APP_CONFIG.serverHost, () => {})
