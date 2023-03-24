
import { RemoteConfigService } from '@Service/RemoteConfig'
import { FunctionComponent } from 'preact'
import { renderHook } from '@testing-library/preact-hooks'
import { render } from '@testing-library/preact'
import {

  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../../__mocks__/initializeMockState'

jest.mock('@/helpers/axios')

const EventSource_close = jest.fn()
const EventSource_removeEventListener = jest.fn()

// Substitute `EventSource` with a mock class.
//
// @ts-ignore
global.EventSource = class {

  constructor() {

  }

  close = EventSource_close
  removeEventListener = EventSource_removeEventListener

}

describe('RemoteConfigService', () => {
  const mockValidHostnames = new Set([
    'test-hostname',
    'localhost:3000',
    'idreamnode0'
  ])

  const testMessage = 'The quick brown fox jumps over the lazy dog.'
  let __instance: RemoteConfigService

  const TC: FunctionComponent = props => {
    __instance = new RemoteConfigService()

    return (
      <>
        <p>{testMessage}</p>
      </>
    )
  }

  beforeEach(() => {
    global.__remoteConfig = {
      _id: 'test-id',
      security: {
        validHostnames: [ ...mockValidHostnames.values() ],
      }
    }

    initializeGlobalMocksState(TC)
  })

  afterEach(() => {
    teardownGlobalMocksState(TC)
  })

  test('should return a properly defined instance of the RemoteConfigService.', () => {
    const { container } = render(<TC />)
    
    expect(__instance).toBeInstanceOf(RemoteConfigService)
    expect(__instance.config).toBeDefined()
    expect(__instance.refresh).toBeDefined()
    expect(__instance.useConfig).toBeDefined()
    expect(container.querySelector('p').textContent).toBe(testMessage)
  })

  test('config() => should properly return the mock remote config defined above.', () => {
    const config = __instance.config()

    // @ts-ignore
    expect(config).toBe(__instance._config)
  })

  test('useConfig() => should properly call the defined mock functions above.', () => {
    const mockBaseUrl = 'https://api.idreamnode0.tailnet-cdc9.ts.net'

    // @ts-ignore
    __instance._axios = { defaults: 
      {
        baseURL: mockBaseUrl,
      }
    }

    const { waitFor } = renderHook(() => __instance.useConfig())

    waitFor(() => {
      // Check the resulting object to be referentially equal to __instance.config
      // @ts-ignore
      expect(config.result.current).toBe(__instance._config)

      // Check if the axios instance's baseURL matches to mockBaseUrl
      // @ts-ignore
      expect(__instance._axios.defaults.baseURL).toBe(mockBaseUrl)

      // @ts-ignore
      for (const hostname of config.result.current.security.validHostnames)
        expect(mockValidHostnames.has(hostname)).toBeTruthy()
      
      expect(EventSource_close).toBeCalledTimes(1)
      expect(EventSource_removeEventListener).toBeCalledTimes(2)
    })
  })

  test('refresh() => should properly call the defined jest.fn() in the mock _axios object.', () => {
    // @ts-ignore
    __instance._axios = {
      put: jest.fn()
    }

    const { waitFor } = renderHook(() => __instance.refresh())

    waitFor(() => {
      // @ts-ignore
      expect(__instance._axios.put).toBeCalledTimes(1)
    })
  })

})