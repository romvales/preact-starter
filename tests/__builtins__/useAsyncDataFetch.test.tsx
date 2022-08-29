import { Fragment, FunctionComponent } from 'preact'
import { render, renderHook, act } from '@testing-library/preact'
import { StateUpdater, useState } from 'preact/hooks'
import { useAsyncDataFetch, FetchStateStatus, resolvePendingAsyncDataFetches } from '@/helpers'
import {

  initializeGlobalMocksState,
  teardownGlobalMocksState,

} from '../__mocks__/initializeMockState'
import { switchEnvironment } from '../utils'
import { JSXInternal } from 'node_modules/preact/src/jsx'

const enum FetchTestType {
  TestSuccessState = 0,
  TestErrorState,
  TestPendingState
}

describe('useAsyncDataFetch', () => {
  let container: Element
  let testData: any
  let testFetchState: FetchState
  let testNum = FetchTestType.TestSuccessState

  const TC: FunctionComponent<{ testFunc: ([]: any) => Promise<any>, result: { current: [any, StateUpdater<any>] }, fetchOptions: FetchOptions }> = (props) => {
    const result = props.result
    const [fetchState, fetchCallback] = useAsyncDataFetch(props.fetchOptions, props.testFunc)
    testFetchState = fetchState

    // fetchCallback's parameter is invoked when fetchState.status change -> FetchStateStatus.Success
    fetchCallback(res => {

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
                ui = <p>{JSON.stringify(result.current[0])}</p>
            }

            return ui
          })()
        }
      </>
    )
  } 

  beforeEach(() => {
    initializeGlobalMocksState(TC)
    switchEnvironment() // browser mode

    if (testNum != FetchTestType.TestErrorState) {
      window.__APP_STATE__.asyncDataFetchesIndex = 1
      window.__APP_STATE__.asyncDataFetches.push({
        data: { message: 'The quick brown fox jumps over the lazy dog.' },
        used: false,
      })
    } else {
      window.__APP_STATE__.asyncDataFetchesIndex = 0
      window.__APP_STATE__.asyncDataFetches = []
    }

    const { result } = renderHook(() => useState({}))
    const testFetchOptions = { onServer: true, reuse: true }
    const testAsyncDataFetcher = async ([ fState, setState ]) => {
      switch (testNum) {
      case FetchTestType.TestPendingState:
        setState({ status: FetchStateStatus.Pending })
        return 
      case FetchTestType.TestErrorState:
        setState({ status: FetchStateStatus.Error, message: 'There was an error while requesting resource..' })
        return 
      }

      return { message: 'The quick brown fox jumps over the lazy dog.' }
    }

    const { container: C } = render(
      <TC testFunc={testAsyncDataFetcher}
        result={result}
        fetchOptions={testFetchOptions} />)

    container = C
    testData = result.current.at(0)
    testNum++
  })

  afterEach(() => {
    switchEnvironment() // server mode
    teardownGlobalMocksState(TC)
  })

  test('should render the pending message when `useAsyncDataFetch` data is still not available.', () => {
    testFetchState = { status: FetchStateStatus.Pending }

    expect(testFetchState.status).toBe(FetchStateStatus.Pending)
    expect(container.textContent).toBe('{}')
  })

  test('should render an error message when `useAsyncDataFetch` results into an error.', () => {
    const h4 = container.querySelector('h4')
    const p = container.querySelector('p')

    expect(h4).toBeDefined()
    expect(p).toBeDefined()
    expect(h4.textContent).toBe('Something went wrong!!')
    expect(p.textContent).toBe(JSON.stringify(testFetchState.message))
  })

  test('should render the state\'s data when everything goes well inside of `useAsyncDataFetch`.', () => {
    expect(testFetchState.status).toBe(FetchStateStatus.Success)
    expect(container.textContent).toBe(JSON.stringify(testData))
  })


})
