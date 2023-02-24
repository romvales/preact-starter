import webpack, { Configuration } from 'webpack'
import path from 'path'
import devConfig from './dev'

import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { GenerateSW } from 'workbox-webpack-plugin'

const buildConfig: Configuration = {
  mode: 'production',
  devtool: 'source-map',
  name: 'web',

  entry: {
    index: [ path.resolve('src', 'index.tsx') ],
  },

  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunk-[id].[contenthash].js',
  },

  module: {
    noParse: /gun\.js$/,
    rules: [
      ...devConfig.module.rules.slice(0, -1),
      {
        test: /\.(p?css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'postcss-loader', 
        ],
      },
    ]
  },

  resolve: devConfig.resolve,
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -10,
          reuseExistingChunk: true,
        },
      },
    },
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: true,
          module: true,
          sourceMap: true,
        },
      }),
    ],
  },

  plugins: [
    ...devConfig.plugins.slice(0, -1),

    new GenerateSW(),
  
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: 'assets/[name].[contenthash].css', 
      attributes: {
        media: 'all',
        onload: 'this.media = \'all\'',
      },
    }),
  ],

  externalsPresets: devConfig.externalsPresets,
  experiments: devConfig.experiments,
}

export default buildConfig
