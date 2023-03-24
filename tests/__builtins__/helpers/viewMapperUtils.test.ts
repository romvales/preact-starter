

import { getRouteUrlByName, __mapViewRoutes } from '@/helpers'
import path from 'path'

import {
  initializeGlobalMocksState,
  teardownGlobalMocksState

} from '../../__mocks__/initializeMockState'

const MOCKVIEW_PATH = path.resolve(process.cwd(), 'tests/__mocks__/mockViews')

jest.mock('@/views', () => ({
  view_import: (path: string) => require('tests/__mocks__/mockViews' + path)
}))

describe('__mapViewRoutes', () => {


  beforeEach(() => {
    initializeGlobalMocksState()
  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should list all views from the `src/views` folder.', async () => {
    const views = __mapViewRoutes(MOCKVIEW_PATH)

    console.log(JSON.stringify(views, null, 2))

    expect(views.__global).toBeDefined()

    expect(views.__global.index.options).toBeDefined()
    expect(views.__global.index.url).toBe('/')
    expect(views.__global.index.options.name).toBe('mock-view')

    expect(views.__global._mockParam.index.options).toBeDefined()
    expect(views.__global._mockParam.index.url).toBe('/:mockParam')
    expect(views.__global._mockParam['%ignore']).toBeUndefined()

  })

})

jest.mock('@/services/RemoteConfig', () => ({

  RemoteConfigService: class {

    constructor() {}
    config(): RemoteConfig {
      return {
        _id: 'ObjectId(null)',
        security: {
          validHostnames: ['localhost'],
        }
      }
    }

  }

}))

// @ts-ignore
window.location = {
  hostname: 'localhost',
}

describe('getRouteUrlByName', () => {


  beforeEach(() => {
    initializeGlobalMocksState()
  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should get the url of a specific named route.', async () => {
    __mapViewRoutes(MOCKVIEW_PATH)

    expect(getRouteUrlByName('mock-view')).toBe('/mock/:param')
  })

})

