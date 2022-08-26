import { environment, getServerSideProps, resolvePendingProps } from '@/helpers/ssr-utils'
import { render } from '@testing-library/preact'
import { FunctionComponent } from 'preact'
import { switchEnvironment } from '../utils'

import {
  mockAppState, 
  mockPendingSSProps,

  initializeGlobalMocksState,
  teardownGlobalMocksState,
} from '../__mocks__/initializeMockState'

describe('getServerSideProps', () => {
  const TC: FunctionComponent<{ message?: string }> = (props) => {
    return (
      <p className='message'>{props.message}</p>
    )
  } 

  beforeEach(() => {
    initializeGlobalMocksState(TC) 
  })

  afterEach(() => {
    teardownGlobalMocksState(TC)
  })


  test('should define the necessary variable and objects...', () => {
    expect(window).toBeDefined()
    expect(window.__APP_STATE__).toBeDefined()
    expect(environment.isServer).toBeTruthy()
    expect(pendingServerSideProps).toBeDefined()
    expect(window.__APP_STATE__).toHaveProperty('serverSideProps')
    expect(window.__APP_STATE__).toHaveProperty('serverSidePropsIndex')
    expect(TC.defaultProps).toBeDefined()
  })

  test('should populate the `defaultProps` of a component with async data (data fetched).', async () => {
    // Setup the defaultProps of the TC component.
    getServerSideProps(TC, async () => {
      return { message: 'The quick brown fox jumps over the lazy dog.' }
    })

    // not passed 
    getServerSideProps(TC, async () => {
      return null
    })

    await resolvePendingProps({} as any)

    const mockPendingSSPropsLength = mockPendingSSProps.length
    switchEnvironment()

    const { container } = render(<TC />)
    expect(container.querySelector('p').textContent).toBe('The quick brown fox jumps over the lazy dog.')
    expect(mockAppState.serverSidePropsIndex).toBe(1)
    expect(mockAppState.serverSideProps).toHaveLength(1)
    expect(mockPendingSSPropsLength).toBe(2)

    switchEnvironment()
  })

})
