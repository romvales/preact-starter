import { setupDevMiddleware, ssrRouter } from './middlewares'
import morgan from 'morgan'
import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'

const server = express()
const serverPort = parseInt(process.env.PORT) || 3000

setupDevMiddleware(server)

server.use(cookieParser())
server.use(morgan('dev'))
server.use(express.static(path.resolve('dist'), { index: false }))
server.use(ssrRouter)

server.listen(serverPort, null, () => {})
