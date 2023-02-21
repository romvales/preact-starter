import { createContext, FunctionComponent } from 'preact'
import { StoreProvider } from '@preact-hooks/unistore' 
import { Store } from 'unistore'

export const SSRContext = createContext(null)
export const ServerContext: FunctionComponent<{ value: any, store: Store<any> }> = (props) => {
  return (
    <SSRContext.Provider value={props.value}>
      <StoreProvider value={props.store}>
        {props.children}
      </StoreProvider>
    </SSRContext.Provider>
  )
}

