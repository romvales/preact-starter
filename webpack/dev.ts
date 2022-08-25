import webpack, { Configuration } from 'webpack'
import { isDevelopment } from '@/helpers/ssr-utils'
import path from 'path'

import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const devConfig: Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  name: 'web',

  entry: {
    index: [
      path.resolve('src', 'index.tsx'),
      'webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=2000',
    ]
  },

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
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
        test: /\.(svg)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(p?css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve('src'),
      'webpackConfig': path.resolve('webpack'),
      'react': path.resolve('node_modules', 'preact', 'compat'),
      'react-dom': path.resolve('node_modules', 'preact', 'compat'),
    },
    extensions: ['.ts', '.tsx', '.json', '.pcss', '.js'],
    modules: ['node_modules'],
  },

  plugins: [
    new HtmlPlugin({
      minify: !isDevelopment,
      template: path.resolve('src', 'assets', 'index.html'),
      inject: 'body',
      scriptLoading: 'module',
      publicPath: '/',
      filename: path.resolve('dist', 'index.html'),
      meta: {
        charset: { charset: 'utf-8' },
        viewport: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        xUaCompatible: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      },
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src', 'assets', 'app.webmanifest'),
          to: path.resolve('dist'),
        }
      ],
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],

  externalsPresets: { web: true, webAsync: true },
  experiments: { topLevelAwait: true },

  stats: 'normal',

  // @ts-ignore
  devServer: {
    hot: true,
    compress: true, 
    historyApiFallback: true,
  },
}

export default devConfig
