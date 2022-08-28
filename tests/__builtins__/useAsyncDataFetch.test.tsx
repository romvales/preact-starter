import { Fragment, FunctionComponent } from 'preact'
import { render, renderHook } from '@testing-library/preact'
import { StateUpdater, useState } from 'preact/hooks'
import { useAsyncDataFetch, FetchStateStatus } from '@/helpers'
import {

  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'
import { switchEnvironment } from '../utils'
import { JSXInternal } from 'node_modules/preact/src/jsx'

describe('useAsyncDataFetch', () => {
  let container: Element
  let testData: any
  let testFetchState: FetchState

  const TC: FunctionComponent<{ testFunc: () => Promise<any>, data: [any, StateUpdater<any>], fetchOptions: FetchOptions }> = (props) => {
    const [D, setData] = props.data
    const [fetchState, fetchCallback] = useAsyncDataFetch(props.fetchOptions, props.testFunc)
    testFetchState = fetchState

    // fetchCallback's parameter is invoked when fetchState.status change -> FetchStateStatus.Success
    fetchCallback(() => {
      setData({ message: 'To infinity and beyond.' })
    })

    return (
      <>
        {
          (() => {
            let ui: JSXInternal.Element

            switch (fetchState.status) {
            case FetchStateStatus.Error:
              ui = <Fragment>
                <h4>Something went wrong!!</h4>
                <p>{JSON.stringify(fetchState.message)}</p>
              </Fragment>
              break
            case FetchStateStatus.Pending:
              ui = <p>Waiting to be resolved...</p>
              break
            case FetchStateStatus.Success:
              ui = <p>{JSON.stringify(D)}</p>
            }

            return ui
          })()
        }
      </>
    )
  }

  let testNum = 0

  beforeEach(() => {
    initializeGlobalMocksState(TC)
    switchEnvironment()

    if (testNum++ !== 0) {
      window.__APP_STATE__.asyncDataFetchesIndex = 1
      window.__APP_STATE__.asyncDataFetches.push({
        data: { message: 'The quick brown fox jumps over the lazy dog.' },
        used: false,
      })
    }

    const { result } = renderHook(() => useState({}))
    const testFetchOptions = { onServer: true, reuse: true }
    const testAsyncDataFetcher = async () => {
      return { message: 'The quick brown fox jumps over the lazy dog.' }
    }

    const { container: C } = render(
      <TC testFunc={testAsyncDataFetcher}
        data={result.current}
        fetchOptions={testFetchOptions} />)
    container = C
    testData = result.current.at(0)
  })

  afterEach(() => {
    switchEnvironment()
    teardownGlobalMocksState(TC)
  })

  test('should render the pending message when `useAsyncDataFetch` data is still not available.', () => {
    expect(testFetchState.status).toBe(FetchStateStatus.Pending)
    expect(container.textContent).toBe('Waiting to be resolved...')
  })

  test('should render an error message when `useAsyncDataFetch` results into an error.', () => {
    const h4 = container.querySelector('h4')
    const p = container.querySelector('p')

    expect(h4).toBeDefined()
    expect(p).toBeDefined()
    expect(testFetchState.status).toBe(FetchStateStatus.Error)
    expect(h4.textContent).toBe('Something went wrong!!')
    expect(p.textContent).toBe(testFetchState.message)
  })

  test('should render the state\'s data when everything goes well inside of `useAsyncDataFetch`.', () => {
    expect(testFetchState.status).toBe(FetchStateStatus.Success)
    expect(container.textContent).toBe(JSON.stringify(testData))
  })


})
