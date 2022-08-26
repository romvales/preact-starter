import { initAppState, initUniStore } from '@/helpers/ssr-utils'
import { ServerContext } from '@/server/SSRContext'
import { render } from '@testing-library/preact'
import { FunctionComponent } from 'preact'
import {
  initializeGlobalMocksState,
  teardownGlobalMocksState,
} from '../__mocks__/initializeMockState'
import { useStore } from '@preact-hooks/unistore'
import createStore from 'unistore'

describe('initUniStore', () => {
  const TC: FunctionComponent<any> = (props) => {
    const store = useStore<any>()
 
    return (
      <>
        <p>{store.getState().message}</p>
      </>
    )
  }

  beforeEach(() => {
    initializeGlobalMocksState()
    window.clientRuntimeConfig = {
      BASE_URL: 'http://localhost:3000',
    }

  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should populate the unistore initial store with the necessary data.', () => {
    window.__UNISTORE_STATE__ = createStore({
      message: 'The quick brown fox jumps over the lazy dog.',
    }).getState()

    const { container } = render(<ServerContext value={initAppState()} store={initUniStore()}>
      <TC />
    </ServerContext>)
  
    expect(window.__UNISTORE_STATE__).toBeDefined()
    expect(container.querySelector('p').textContent).toBe('The quick brown fox jumps over the lazy dog.')
  })

})
