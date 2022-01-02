import * as React from 'react'

import {
  Class,
  Auth
} from './types'
import { Store } from './useStore';


const useDispatch = () => {

  const { dispatch } = React.useContext(Store)

  return ({
    // Auth Operations
    isLoggedIn: (payload: any) => dispatch({ type: Auth.isLoggedIn, payload }),
    login: (payload: any) => dispatch({ type: Auth.login, payload }),
    signup: (payload: any) => dispatch({ type: Auth.signup, payload }),
    logout: (payload: any) => dispatch({ type: Auth.logout, payload }),
    // online-classes Operations
  });
}

export default useDispatch;