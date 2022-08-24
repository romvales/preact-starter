import { Configuration } from 'webpack'
import devConfig from './dev'

const testingConfig: Configuration = {

  module: {
    rules: [
      ...devConfig.module.rules,
    ]
  },

  resolve: devConfig.resolve,


}