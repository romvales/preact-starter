
import { initApiAxios } from '@/helpers/axios'

import {
  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../../__mocks__/initializeMockState'

describe('initApiAxios', () => {
  const endpoints = new Set([ 
    'https://api.idreamnode0.tailnet-cdc9.ts.net',
    'https://graph.facebook.com',
    'https://api.localhost:3000',
  ])

  beforeEach(() => {
    global.APP_CONFIG = {
      apiOptions: {
        endpoints: [ ...endpoints.values() ]
      }
    }
    
    initializeGlobalMocksState()
  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should create a new axios instance based on a mock APP_CONFIG.apiOptions.endpoints', async () => {
    initApiAxios()

    expect(window.__APP_STATE__.selectedApiEndpoint).toBeDefined()
    expect(endpoints.has(window.__APP_STATE__.selectedApiEndpoint)).toBeTruthy()
  })

})