import { environment, getServerSideProps } from '@/helpers'
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

  const TC: FunctionComponent<{ message?: string, data?: 1 }> = (props) => {
    return (
      <>
        <p className='message'>{props.message}</p>
        <p className='message-2'>{props.data}</p>
      </>
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
      return { data: 1 }
    })

    const resolvePendingProps = jest.fn(async () => {
      for (const pending of pendingServerSideProps) {
        const C = pending.C
        const cb = pending.aF
        const result = await pending.aF(null)

        C.defaultProps = Object.assign(C.defaultProps ?? {}, result)
        window.__APP_STATE__.serverSideProps.push(result)
      }

      window.__APP_STATE__.serverSidePropsIndex = window.__APP_STATE__.serverSideProps.length
    })

    await resolvePendingProps()

    switchEnvironment() // browser mode

    const mockPendingSSPropsLength = mockPendingSSProps.length

    const { container } = render(<TC />)
    expect(resolvePendingProps).toHaveBeenCalled()
    expect(container.querySelector('p.message').textContent).toBe('The quick brown fox jumps over the lazy dog.')
    expect(container.querySelector('p.message-2').textContent).toBe("1")
    expect(mockAppState.serverSidePropsIndex).toBe(2)
    expect(mockAppState.serverSideProps).toHaveLength(2)
    expect(mockPendingSSPropsLength).toBe(2)

    switchEnvironment() // server
  })

  test('should throw an error when passed a non function component as first parameter.', async () => {
    const err = await getServerSideProps(function () { } as any, async () => ({})).catch(err => err)
    expect(() => { throw err }).toThrowError('(anonymous) is not a valid function component.')
  })

})
