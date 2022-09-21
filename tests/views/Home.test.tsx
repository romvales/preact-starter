import { Home } from '@/views'
import { StoreProvider } from '@preact-hooks/unistore'
import { render, fireEvent, waitFor } from '@testing-library/preact'
import { AppStateStore } from '@/services'
import {
  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'
import createStore from 'unistore'
import mockBreeds from './breeds.json'

jest.mock('axios', () => ({

  async get() {
    return { data: mockBreeds } 
  }


}))

jest.mock('@/helpers/ssr-utils', () => ({

  pendingServerSideProps() {},
  getServerSideProps() {},

  environment: {
    isBrowser: true,
  },


}))

describe('Home view', () => {
  const testStore = createStore<{ A: AppState }>({} as any)

  beforeEach(() => {
    initializeGlobalMocksState(Home)
  })

  afterEach(() => {
    teardownGlobalMocksState(Home)
  })

  test('should display a message to the user described below.', () => {
    const expectedMsg = 'breedFind is a simple utility web app that can quickly search for a specific dog breed. If you’re a dog lover, I’m sure you’ll find this tool useful.'

    const { container } = render(<StoreProvider value={testStore}><Home /></StoreProvider>)

    expect(container.querySelector('.main__welcome-message').textContent).toBe(expectedMsg)
  })

  test('[button] navigate to Catalog view when `Start Digging` is clicked!', async () => {
    const app = new AppStateStore(testStore)
    const { container } = render(<StoreProvider value={testStore}><Home /></StoreProvider>)
    const startBtn = container.querySelector('button.footer__start-button')

    expect(startBtn).toBeDefined()
    fireEvent.click(startBtn)
    await waitFor(() => {
      const state = testStore.getState().A

      expect(mockBreeds).toBeDefined()
      expect(localStorage).toBeDefined()
      expect(localStorage.getItem(app.lkey) != undefined).toBeTruthy()
      expect(state).toBeDefined()

      expect(app.lkey).toBe('breedfind-web')
      expect(Object.values(state.breeds)).toHaveLength(Object.values(mockBreeds).length)
      expect(typeof testStore.getState().A.startedAt).toBe('number')
    })
  })

})
