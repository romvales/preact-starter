import { Fragment, FunctionComponent } from 'preact'

import { renderHook } from '@testing-library/preact-hooks'

import { useAsyncDataFetch, FetchStateStatus } from '@/helpers'
import {

  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'
import { switchEnvironment } from '../utils'

const enum FetchTestType {
  TestSuccessState = 0,
  TestErrorState,
  TestPendingState
}

describe('useAsyncDataFetch', () => {

  beforeEach(() => {
    initializeGlobalMocksState()
    switchEnvironment() // browser mode
  })

  afterEach(() => {
    switchEnvironment() // server mode
    teardownGlobalMocksState()
  })

  test('should render the pending message when `useAsyncDataFetch` data is still not yet available.', async () => {
    const { waitFor, result } = renderHook(() => useAsyncDataFetch({}, async () => {
      
      return {}
    }))

    await waitFor(() => {
      const [fetchState, fCb] = result.current
      expect(fetchState.status).toBe(FetchStateStatus.Pending)
    })
  })

  test('should render an error message when `useAsyncDataFetch` results into an error.', async () => {
    const errMsg = 'Something went wrong while fetching the data source...'
    const { waitFor, result } = renderHook(() => useAsyncDataFetch({}, async ([,setState]) => {
      setState({
        status: FetchStateStatus.Error,
        message: errMsg,
      })

      return
    }))

    await waitFor(() => {
      const [fetchState, _] = result.current

      expect(fetchState.message).toBe(errMsg)
      expect(fetchState.status).toBe(FetchStateStatus.Error)
    })
  })

  test('should render the state\'s data when everything goes well inside of `useAsyncDataFetch`.', async () => {
    const { waitFor, result } = renderHook(() => useAsyncDataFetch({ onServer: true }, async ([,setState]) => {
      setState({ status: FetchStateStatus.Success })
      return { message: 'The quick brown fox jumps over the lazy dog.' }
    }))
    
    await waitFor(async () => {
      const [fetchState, _] = result.current
      expect(fetchState.status).toBe(FetchStateStatus.Success)
    })
  })


})
