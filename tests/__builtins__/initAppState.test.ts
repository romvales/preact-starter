import { initAppState } from '@/helpers'

describe('initAppState', () => {
  beforeAll(() => {
    global.APP_CONFIG = {

      // Expected to be not accessible on the client-side
      serverRuntimeConfig: {
        SUPER_SECRET_PHRASE: '<secret>',
      },

      clientRuntimeConfig: {
        BASE_URL: 'http://localhost:3000',
        MESSAGE: 'The quick brown fox jumps over the lazy dog.',
      }
    }
  })

  test('should initialize the app state (window.__APP_STATE__) with the necessary data.', () => {
    initAppState()

    expect(window.__APP_STATE__).toBeDefined()
    expect(window.__APP_STATE__).toHaveProperty('clientRuntimeConfig')
    expect(clientRuntimeConfig.BASE_URL).toBe('http://localhost:3000')
    expect(clientRuntimeConfig.MESSAGE).toBe('The quick brown fox jumps over the lazy dog.')
    expect(typeof serverRuntimeConfig).toBe('undefined')
  })

})
