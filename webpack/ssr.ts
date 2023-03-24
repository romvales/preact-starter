import { isDevelopment } from '@/helpers/constants'
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
    chunkFilename: 'chunks/chunk.[contenthash].js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'swc-loader',
      },
      {
        test: /\.(gif|png|jpe?g|webp|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(mp[3-4]|ogg|mpeg|m4a|flac|3gp)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/avs/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(md|svg)$/,
        type: 'asset/source',
      },
      {
        test: /\.(p?css)$/,
        use: [
          'css-loader',
        ],
      },
    ]
  },

  plugins: [
    ...buildConfig.plugins.slice(0, -2),
  ],

  resolve: buildConfig.resolve,
  optimization: isDevelopment ? {} : buildConfig.optimization,

  stats: {
    errorDetails: true,
  },

  externalsPresets: { node: true },
  experiments: { topLevelAwait: true },
  externals: [
    webpackNodeExts(),
  ],
}

export default ssrConfig
