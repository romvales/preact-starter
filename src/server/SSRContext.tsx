import { createContext, FunctionComponent } from 'preact'
import { Provider } from 'unistore/preact'
import { Store } from 'unistore'

export const SSRContext = createContext(null)
export const ServerContext: FunctionComponent<{ value: any, store: Store<any> }> = (props) => {
  return (
    <SSRContext.Provider value={props.value}>
      <Provider store={props.store}>
        {props.children}
      </Provider>
    </SSRContext.Provider>
  )
}
