import { isProduction } from '@/helpers/ssr-utils'
import { Express } from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import devConfig from 'webpackConfig/dev'

const devCompiler = webpack(devConfig)

export function setupDevMiddleware(app: Express) {
  if (isProduction) return

  app.use(webpackDevMiddleware(devCompiler, {
    index: false,
    serverSideRender: true,
    writeToDisk: true,
    publicPath: devConfig.output.publicPath,
    stats: 'normal',
  }))

  app.use(webpackHotMiddleware(devCompiler, {
    heartbeat: 2000,
  }))
}

