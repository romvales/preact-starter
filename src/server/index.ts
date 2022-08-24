import { setupDevMiddleware, ssrRouter } from './middlewares'
import morgan from 'morgan'
import express from 'express'
import path from 'path'

const server = express()
const serverPort = parseInt(process.env.PORT) || 3000

setupDevMiddleware(server)

server.use(morgan('dev'))
server.use(express.static(path.resolve('dist'), { index: false }))
server.use(ssrRouter)

server.listen(serverPort, null, () => {})
