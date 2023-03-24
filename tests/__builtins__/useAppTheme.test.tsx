

import { useAppTheme } from '@/helpers'
import { renderHook } from '@testing-library/preact-hooks'
import {
  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'

describe('useAppTheme', () => {

  beforeEach(() => {
    initializeGlobalMocksState()
  })

  afterEach(() => {
    teardownGlobalMocksState()
  })

  test('should define the necessary objects for the suite.', () => {
    expect(document.cookie).toBeDefined()
    expect(document.documentElement).toBeDefined()
    expect(useAppTheme).toBeDefined()
  })

  test('should toggle and untoggle the `dark` class on the documentElement of the DOM.', async () => {
    
    const { waitFor } = renderHook(() => {
      const { setTheme } = useAppTheme()
      setTheme('dark')
    })

    // Before calling the hook tests
    expect(document.cookie).toBe('')
    expect(document.documentElement.classList.contains('dark')).toBeFalsy()

    waitFor(() => {
      expect(document.cookie).toBe(`${encodeURIComponent('appCurrentTheme')}=${encodeURIComponent('dark')}; SameSite=Lax; secure;`)
      expect(document.documentElement.classList.contains('dark')).toBeTruthy()
    })
  })


})
