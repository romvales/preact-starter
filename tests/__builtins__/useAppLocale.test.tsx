
import { useAppLocale } from '@/contents'
import { renderHook } from '@testing-library/preact-hooks'
import {
  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'

describe('useAppLocale', () => {

  beforeEach(() => {
    initializeGlobalMocksState()
  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should define the required objects for the suite.', () => {
    expect(document.cookie).toBeDefined()
    expect(useAppLocale).toBeDefined()
  })

  test('should set the value of the `document.cookie` to be populated.', () => {

    const { waitFor } = renderHook(() => {
      const { updateAppLocale } = useAppLocale()
      updateAppLocale('jp')
    })

    // Check the initial values of independent variables.
    expect(document.cookie).toBe('')

    waitFor(() => {
      const patt = /appCurrentLocale=(?<appCurrentLocale>[a-z]{2})/i

      expect(patt.test(document.cookie)).toBeTruthy()
      expect(document.cookie.match(patt).groups.appCurrentLocale).toBe('jp')
    })
  })


})