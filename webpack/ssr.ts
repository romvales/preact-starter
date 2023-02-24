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
    path: isDevelopment ? path.resolve('.dist') : path.resolve('dist'),
    publicPath: '/', 
    globalObject: 'this',
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: '[name].chunk.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: 'swc-loader',
      },
      {
        test: /\.(gif|png|jpe?g|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(mp[3-4]|ogg|mpeg|m4a|flac|3gp)/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/avs/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
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
          filename: 'assets/images/[hash][ext][query]',
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
