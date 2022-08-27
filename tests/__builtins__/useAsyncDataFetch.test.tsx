import { Fragment, FunctionComponent } from 'preact'
import { render, renderHook } from '@testing-library/preact'
import { useState } from 'preact/hooks'
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

  const TC: FunctionComponent<{ testFunc: () => Promise<void>, data: any, fetchOptions: FetchOptions }> = (props) => {
    const fetchState = useAsyncDataFetch(props.fetchOptions, props.testFunc)

    testFetchState = fetchState

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
                ui = <p>{JSON.stringify(props.data)}</p>
            }

            return ui
          })()
        }
      </>
    )
  } 

  beforeEach(() => {
    initializeGlobalMocksState(TC)
    switchEnvironment()

    const { result } = renderHook(() => useState({})) 
    const [ data, setData ] = result.current
    const testFetchOptions = { onServer: false }
    const testAsyncDataFetcher = async () => {

    }

    const { container: C } = render(<TC testFunc={testAsyncDataFetcher} data={data} fetchOptions={testFetchOptions} />)
    container = C
    testData = data
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
