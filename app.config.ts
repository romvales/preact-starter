import { isDevelopment } from './src/helpers/ssr-utils'

export const APP_CONFIG: AppConfig = Object.freeze({
  title: 'Preact.JS Template',

  // --- Server options
  serverHost: '0.0.0.0',
  serverPort: parseInt(process.env.PORT) || 3000,

  secretPhrase: process.env.SECRET_PHRASE,

  // --- Middleware options

  helmetOptions: {
    contentSecurityPolicy: false,
  },

  cookieParserOptions: {

  },

  morganOptions: {

  },


  // --- Heroku options

  // --- Environmental options
  clientRuntimeConfig: {
    BASE_URL: 'http://localhost:3000',
  },

  serverRuntimeConfig: {
    
  },

})

global.APP_CONFIG = APP_CONFIG
global.serverRuntimeConfig = APP_CONFIG.serverRuntimeConfig

