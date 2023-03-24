import '../app.config.ts'

import webpack, { Configuration } from 'webpack'
import { isDevelopment } from '@/helpers/constants'
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
    path: path.resolve('.dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunks/chunk.[contenthash].js',
    clean: true,
  },

  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
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
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(md|svg)$/i,
        type: 'asset/source'
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
      "tests": path.resolve('tests'),
      'webpackConfig': path.resolve('webpack'),
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
      '~Image': path.resolve('src', 'assets', '_images'),
      '@Service': path.resolve('src', 'services'),
    },
    cache: false,
    extensions: ['.ts', '.tsx', '.json', '.pcss', '.js', '.md', '.ttf', '.css', '.woff2'],
    modules: ['node_modules'],
    fallback: {
      os: false,
      url: false,
      crypto: false,
      assert: false,
      path: false,
      fs: false,
    },
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

  stats: {
    errorDetails: true
  },

}

export default devConfig
