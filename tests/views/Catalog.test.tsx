
import { Catalog } from '@/views'
import { AppStateStore } from '@/services'
import { fireEvent, render, waitFor } from '@testing-library/preact'
import { throwNotImplemented } from '../utils'
import {
  initializeGlobalMocksState,
  teardownGlobalMocksState
} from '../__mocks__/initializeMockState'
import createStore from 'unistore'
import mockBreeds from './breeds.json'
import { StoreProvider } from '@preact-hooks/unistore'
import { FetchStateStatus } from '@/helpers/ssr-utils'

jest.mock('axios', () => ({

  async get(path: string) {
    return { data: mockBreeds }
  },

}))

jest.mock('@/helpers/ssr-utils', () => ({

  useAsyncDataFetch() {
    return [ { status: FetchStateStatus.Pending }, () => ({ breeds: mockBreeds, lovedBreeds: mockBreeds }) ] 
  },
  pendingServerSideProps() { },
  getServerSideProps() { },

  environment: {
    isBrowser: true,
  },

  FetchStateStatus: { Pending: 2, Success: 0, Error: 1 },

}))


describe('Catalog view', () => {
  const testStore = createStore<{ A: AppState }>({ A: { breeds: mockBreeds, lovedBreeds: {}, startedAt: Date.now(), fundNotification: { closed: false, closedAt: 0 }, } })
  let state = new AppStateStore(testStore)

  beforeEach(async () => {
    state.Start()
    initializeGlobalMocksState(Catalog)
  })

  afterEach(() => {
    teardownGlobalMocksState(Catalog)
  })

  test('[search] should reactively replace breeds list with the results.', async () => {
    const { container } = render(<StoreProvider value={testStore}>
      <Catalog />
    </StoreProvider>)

    const searchBar: HTMLInputElement = container.querySelector('.search-bar__text-field')
    const items = container.querySelector('.main-section__items')

    // Note: The additional 2 childNodes are the controls and filters
    // that manipulate how the final set of items will be displayed.

    expect(searchBar).toBeDefined()
    expect(items.children).toHaveLength(Object.values(mockBreeds).length)

    fireEvent.input(searchBar, { target: { value: 'Blahblahblah' } })
    expect(searchBar.value).toBe('Blahblahblah')
    expect(items.children).toHaveLength(0)

    fireEvent.input(searchBar, { target: { value: '' } })
    expect(searchBar.value).toBe('')
    expect(items.children).toHaveLength(Object.values(mockBreeds).length)
  })

  describe('[love] should show a list of the breeds loved by user.', () => {
    for (const id in mockBreeds) { state.Add(mockBreeds[id]) }

    const { container } = render(<StoreProvider value={testStore}>
      <Catalog />
    </StoreProvider>)

    const loveSectionItems = container.querySelector('.love-section__data-items ul')

    test('list should contain all items from `breeds.json`', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const loveSectionItems = container.querySelector('.love-section__data-items ul')

      expect(loveSectionItems.children).toHaveLength(0)
    })

    test('should contain the breed name in each item.', () => {
      for (const child of Array.from(loveSectionItems.children)) {
        const id = child.getAttribute('data-id')
        const h3 = child.querySelector('.love-item__breed-name')

        expect(h3).toBeDefined()
        expect(h3.textContent).toBe(mockBreeds[id].name)
      }
    })

    test('breed image url must be present in the <img> tag inside the item', () => {
      for (const child of Array.from(loveSectionItems.children)) {
        const id = child.getAttribute('data-id')
        const img = child.querySelector('.love-item__image') as HTMLImageElement

        expect(img).toBeDefined()
        expect(img.src).toBe(mockBreeds[id].images.at(0))
      }
    })

  })

  describe('[breeds] should list breeds from the source every navigation.', () => {
    test('should contain the breed name in each item.', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const items = container.querySelector('.main-section__items')

      for (const child of Array.from(items.querySelectorAll('.items__item'))) {

        const id = child.getAttribute('data-id')
        const h4 = child.querySelector('.details__breed-name')

        expect(h4).toBeDefined()
        expect(h4.textContent).toBe(mockBreeds[id].name)
      }
    })

    test('should contain the breed type.', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const items = container.querySelector('.main-section__items')

      for (const child of Array.from(items.querySelectorAll('.items__item'))) {
        const id = child.getAttribute('data-id')
        const div = child.querySelector('.details__breed-type')

        expect(div).toBeDefined()
        expect(div.textContent).toBe(mockBreeds[id].type)
      }
    })

    test('breed image url must be present in the item\'s <img>', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const items = container.querySelector('.main-section__items')

      for (const child of Array.from(items.querySelectorAll('.items__item'))) {
        const id = child.getAttribute('data-id')
        const img = child.querySelector('.breed-info__image') as HTMLImageElement

        expect(img).toBeDefined()
        expect(img.src).toBe(mockBreeds[id].images.at(0))
      }
    })

    test('should show the origins of the breed.', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const items = container.querySelector('.main-section__items')

      for (const child of Array.from(items.querySelectorAll('.items__item'))) {
        const id = child.getAttribute('data-id')
        const span = child.querySelector('.origins__names')

        expect(span).toBeDefined()
        expect(span.textContent).toBe(mockBreeds[id].origins.join(', '))
      }
    })

    test('should count how many images an item have', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const items = container.querySelector('.main-section__items')

      for (const child of Array.from(items.querySelectorAll('.items__item'))) {
        const id = child.getAttribute('data-id')
        const p = child.querySelector('.images__message')

        expect(p).toBeDefined()
        expect(p.textContent).toBe(mockBreeds[id].images.length + ' available')
      }
    })

    test('should contain the breed id.', () => {
      const { container } = render(<StoreProvider value={testStore}>
        <Catalog />
      </StoreProvider>)

      const items = container.querySelector('.main-section__items')

      for (const child of Array.from(items.querySelectorAll('.items__item'))) {
        const id = child.getAttribute('data-id')
        const span = child.querySelector('.breed-id__value')

        expect(span).toBeDefined()
        expect(span.textContent).toBe(id)
      }
    })

  })

  test('[ribbon] should hide a section when clicking a ribbon.', async () => {
    const { container } = render(<StoreProvider value={testStore}>
      <Catalog />
    </StoreProvider>)

    const favHideBtn = container.querySelector('#fav-hide')
    const favList = container.querySelector('.love-section__items')

    fireEvent.click(favHideBtn)
    await waitFor(() => {
      expect(favList.classList.contains('hidden')).toBeTruthy()
    })
  })

})
