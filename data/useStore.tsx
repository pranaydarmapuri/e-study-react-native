import * as React from 'react'
import Reducer from './reducers'

const init: any = {}
const Store = React.createContext(init)

const useStore = () => {

  const [state, dispatch] = React.useReducer(Reducer.reducer, Reducer.initData)

  const StoreProvider = (props: any) => (
    <Store.Provider value={{ state, dispatch }} >
      { props.children}
    </Store.Provider>
  )

  return ({
    StoreProvider
  });
}

export { Store }

export default useStore;