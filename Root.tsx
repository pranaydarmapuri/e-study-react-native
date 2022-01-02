import * as React from 'react'
import axiosconfig from './configs/axiosconfig'

import hooks from './hooks/index'

import Navigation from './navigation'
import Welcome from './welcome'
import useDispatch from './data/useDispatch'
import { Store } from './data/useStore'

const Root = () => {

  const { isLoggedIn } = useDispatch()

  React.useEffect(() => {
    console.log(Store)
  }, [])

  const colorScheme = hooks.useColorScheme()

  return (
    true ? <Navigation colorScheme={colorScheme} /> : <Welcome />
  );
}

export default React.memo(Root);