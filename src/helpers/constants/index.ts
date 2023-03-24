
export const environment = {
  get isBrowser() {
    return (typeof process === 'undefined' && typeof module === 'undefined' &&
      (typeof Window === 'function' && typeof Document === 'function')) ||
      typeof Worker === 'function'
  },

  get isServer() {
    return !this.isBrowser && typeof module !== 'undefined'
  },

  get isFinalRender() {
    return global.finalRender
  }
}

export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = !isDevelopment
