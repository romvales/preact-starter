import '../app.config'

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
    ],
  },

  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
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
        test: /\.(gif|png|jpe?g|webp|mp[3-4]|ogg|mpeg|m4a|flac|ico|3gp|toff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
      {
        test: /\.(md)$/i,
        type: 'asset/source'
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
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
    cache: false,
    extensions: ['.ts', '.tsx', '.json', '.pcss', '.js', '.md'],
    modules: ['node_modules'],
  },

  plugins: [
    new HtmlPlugin({
      minify: !isDevelopment,
      title: APP_CONFIG.title,
      favicon: path.resolve('src', 'assets', 'favicon.ico'),
      template: path.resolve('src', 'assets', 'index.html'),
      inject: 'body',
      scriptLoading: 'module',
      filename: path.resolve('dist', 'index.html'),
      meta: Object.assign({}, APP_CONFIG.meta),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src', 'assets', 'app.webmanifest'),
          to: path.resolve('dist'),
        },
        {
          from: path.resolve('src', 'assets', 'robots.txt'),
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
