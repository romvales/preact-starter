import { isDevelopment } from '@/helpers/ssr-utils'
import { Configuration } from 'webpack'
import webpackNodeExts from 'webpack-node-externals'
import path from 'path'

import buildConfig from './build'

const ssrConfig: Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',
  name: 'server',
  node: {
    __dirname: false,
  },

  entry: {
    server: [
      path.resolve('src', 'server', 'index.ts'),
    ],
  },

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    globalObject: 'this',
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: 'swc-loader',
      },
      {
        test: /\.(gif|png|jpe?g|webp|mp[3-4]|ogg|mpeg|m4a|flac|ico|3gp|toff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
      {
        test: /\.(md)$/i,
        type: 'asset/source',
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
      {
        test: /\.(p?css)$/i,
        use: [
          'css-loader',
          'postcss-loader',
        ],
      },
    ]
  },

  plugins: [
    ...buildConfig.plugins.slice(0, -2),
  ],

  resolve: buildConfig.resolve,
  optimization: isDevelopment ? {} : buildConfig.optimization,

  stats: 'normal',

  externalsPresets: { node: true },
  experiments: { topLevelAwait: true },
  externals: [
    webpackNodeExts(),
  ],
}

export default ssrConfig
