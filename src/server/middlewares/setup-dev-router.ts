import { isProduction } from '@/helpers'
import { Express } from 'express'
import devConfig from 'webpackConfig/dev'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const devCompiler = webpack(devConfig)

export function setupDevMiddleware(app: Express) {
  if (isProduction) return

  app.use(webpackDevMiddleware(devCompiler, {
    index: false,
    stats: 'errors-warnings',
    serverSideRender: true,
    writeToDisk: true,
    publicPath: devConfig.output.publicPath,
  }))

  app.use(webpackHotMiddleware(devCompiler, {
    heartbeat: 2000,
  }))
}

