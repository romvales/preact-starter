import { isDevelopment } from '@/helpers/ssr-utils'
import webpack, { Configuration } from 'webpack'
import { WebpackManifestPlugin as ManifestPlugin } from 'webpack-manifest-plugin'
import NodemonPlugin from 'nodemon-webpack-plugin'
import webpackNodeExts from 'webpack-node-externals'
import path from 'path'

import buildConfig from './build'

const ssrConfig: Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',

  entry: {
    index: [
      path.resolve('src', 'server', 'index.ts'),
    ],
  },

  output: {
    path: path.resolve('dist'),
    libraryTarget: 'commonjs',
    publicPath: '/',
    globalObject: 'this',
    filename: isDevelopment ? 'server.js' : 'server.[contenthash].js',
    chunkFilename: 'chunk-[id].[contenthash].js',
    clean: true,
  },

  module: {
    rules: [
      ...buildConfig.module.rules,

      ...(isDevelopment ? [


      ] : [])
    ]
  },

  plugins: [
    ...buildConfig.plugins,

    new ManifestPlugin({
      fileName: 'server-manifest.json',
    }),

    ...(isDevelopment ? [

      new NodemonPlugin({
        script: path.resolve('dist', 'server.js'),

        // @ts-ignore
        watch: path.resolve('src'),
        ignore: [ '*.js.map' ],
        ext: 'js,json,webmanifest',
        verbose: true,
        env: {
          NODE_ENV: 'development',
        },
      }),

      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
      }),

    ] : [])
  ],

  resolve: buildConfig.resolve,
  optimization: isDevelopment ? {} : buildConfig.optimization,

  externalsPresets: { node: true },
  experiments: { topLevelAwait: true },
  externals: [
    webpackNodeExts(),
  ],
}

export default ssrConfig
