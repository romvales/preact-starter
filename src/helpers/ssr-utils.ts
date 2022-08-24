export const isBrowser = typeof process === 'undefined' || typeof process.versions.node === 'undefined' || typeof Window === 'object'
export const isServer = !isBrowser && typeof localStorage === 'undefined' && typeof self === 'undefined' && typeof process.version === 'string'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = !isDevelopment
