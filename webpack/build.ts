import webpack, { Configuration } from 'webpack'
import path from 'path'
import devConfig from './dev'

import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const buildConfig: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  name: 'web',

  entry: {
    index: [ path.resolve('src', 'index.tsx') ],
  },

  output: {
    clean: true,
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunk-[id].[contenthash].js',
  },

  module: {
    rules: [
      ...devConfig.module.rules.slice(0, -1),
      {
        test: /\.(css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
    ]
  },

  resolve: devConfig.resolve,
  optimization: {
    minimize: true,
    minimizer: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
      }),

      new TerserPlugin({
        parallel: true,
      }),
    ],
  },

  plugins: [
    ...devConfig.plugins.slice(0, -1),
    
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'assets/styles/[name].[contenthash].css',
      chunkFilename: 'assets/styles/chunk-[id].[contenthash].css',
    }),
  ],

  externalsPresets: devConfig.externalsPresets,
  experiments: devConfig.experiments,
}

export default buildConfig