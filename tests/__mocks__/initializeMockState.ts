import { FunctionalComponent } from 'preact' 


export let mockDefaultProps = {}
export const mockPendingSSProps = []
export const mockPendingAsyncDataFetches = []
export const mockAppState = {
  serverSideProps: [],
  serverSidePropsIndex: 0,

  asyncDataFetchResults: [],
  asyncDataFetchResultsIndex: 0,
}

export function initializeGlobalMocksState(TC?: FunctionalComponent<any>) {
  if (TC) TC.defaultProps = mockDefaultProps = {}
  window.__APP_STATE__ = mockAppState
  global.pendingServerSideProps = mockPendingSSProps
}

export function teardownGlobalMocksState(TC?: FunctionalComponent<any>) {
  if (TC) delete TC.defaultProps
  window.__APP_STATE__ = undefined
  global.pendingServerSideProps = undefined
}
