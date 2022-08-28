import { isProduction } from '@/helpers/ssr-utils'
import { Express } from 'express'

export function setupDevMiddleware(app: Express) {
  if (isProduction) return

  const devConfig = require('webpackConfig/dev')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const devCompiler = webpack(devConfig)

  app.use(webpackDevMiddleware(devCompiler, {
    index: false,
    serverSideRender: true,
    writeToDisk: true,
    publicPath: devConfig.output.publicPath,
  }))

  app.use(webpackHotMiddleware(devCompiler, {
    heartbeat: 2000,
  }))
}

