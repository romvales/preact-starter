
import { StoreProvider } from '@preact-hooks/unistore'
import { fireEvent, render, waitFor } from '@testing-library/preact'
import { Info } from '@/views'
import {
  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'
import mockBreeds from './breeds.json'
import createStore from 'unistore'

const testId = '00323e3114e4f86961a6854bf5d71838'

jest.mock('@/helpers', () => ({

  useAsyncDataFetch() {
    return [
      {},
      (cb: (out: any) => {}) => {
        cb({ result: mockBreeds[testId] })
      }
    ]
  },

  pendingServerSideProps() {},
  getServerSideProps() {},
  setDocMetadata() {},

  environment: {
    isBrowser: false,
  },

}))

jest.mock('axios', () => ({

  async get() {
    return { data: mockBreeds }
  },


}))

jest.mock('preact-router', () => ({

  route(pathname: string, replace: boolean) {
    if (replace) {
      return history.replaceState({}, '', pathname)
    }

    history.pushState({}, '', pathname)
  },

}))

describe('Info view', () => {
  const testStore = createStore<{ A: AppState }>({
    A: {
      breeds: mockBreeds,
      lovedBreeds: {},
      startedAt: Date.now(),
      fundNotification: {
        closed: false,
        closedAt: 0,
      }
    }
  })

  beforeEach(() => {
    initializeGlobalMocksState(Info)
  })

  afterEach(() => {
    teardownGlobalMocksState(Info)
  })

  describe('should have displayed the correct data that was came from the catalog.', () => {
    history.pushState({}, '', `/breeds/${testId}`)



    test(`should contain the required test breed info and element for test.`, () => {
      const { container } = render(<StoreProvider value={testStore}><Info breeds={mockBreeds} breed={mockBreeds[testId]} /></StoreProvider>)
      const nameEl = container.querySelector('.info-nav__title')
      const viewBtn = container.querySelector('.modal-nav__view-button')
      const closeBtn = container.querySelector('.nav__close-modal')
      const modalEl = container.querySelector('.modal-nav__modal')

      expect(nameEl).toBeDefined()
      expect(viewBtn).toBeDefined()
      expect(modalEl).toBeDefined()
      expect(closeBtn).toBeDefined()
      expect(modalEl.classList.contains('hidden')).toBeTruthy()
      expect(nameEl.textContent).toBe(mockBreeds[testId].name)
    })

    test('is able to open the image gallery modal.', async () => {
      const { container } = render(<StoreProvider value={testStore}><Info breeds={mockBreeds} /></StoreProvider>)
      const breed = mockBreeds[testId]

      const viewBtn = container.querySelector('.modal-nav__view-button')
      const modalEl = container.querySelector('.modal-nav__modal')

      fireEvent.click(viewBtn)
      await waitFor(() => {
        expect(modalEl.classList.contains('hidden')).toBeFalsy()
        
      })
    })

  })

  test('[loved] should store the breed info into localStorage when clicked', async () => {
    const { container } = render(<StoreProvider value={testStore}><Info breeds={mockBreeds} /></StoreProvider>)
    const backButton = container.querySelector('.info-nav__back')

    expect(backButton).toBeDefined()

    fireEvent.click(backButton)
    await waitFor(() => {
      expect(location.pathname).toBe('/breeds')
    })
  })


})
