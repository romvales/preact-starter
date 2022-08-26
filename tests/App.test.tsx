import { render } from '@testing-library/preact'
import { FunctionComponent } from 'preact'
import { switchEnvironment } from './utils'
import {
  mockAppState,
  mockDefaultProps,
  mockPendingSSProps,

  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from './__mocks__/initializeMockState'

describe('App', () => {
  let App: FunctionComponent<any>

  beforeEach(() => {
    initializeGlobalMocksState()
    window.clientRuntimeConfig = {
      BASE_URL: 'http://localhost:3000'
    }

    App = require('@/App').App
  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should define the necessary variable and objects...', () => {
    expect(window).toBeDefined()
    expect(window.__APP_STATE__).toBeDefined()
    expect(pendingServerSideProps).toBeDefined()
    expect(window.__APP_STATE__).toHaveProperty('serverSideProps')
    expect(window.__APP_STATE__).toHaveProperty('serverSidePropsIndex')
  })

  test('should contain a heading with a pangram message.', () => {
    initializeGlobalMocksState(App)
    switchEnvironment()

    history.replaceState({}, null, '/home')
    const { container } = render(<App />)
    expect(container.querySelector('.headline').textContent).toBe(`Smilling golden doggo ${clientRuntimeConfig.BASE_URL}`)
    expect(window.__UNISTORE_STATE__).toBeUndefined()

    teardownGlobalMocksState(App)
    switchEnvironment()
  })

})
