import { Class, Auth } from '../../data/types'
import axiosconfig from '../../configs/axiosconfig'
import AsyncStorage from '@react-native-community/async-storage'
import key from '../../constants/Storagekey'
import tokenConfig from '../../configs/tokenConfig'

interface ActionType {
  type: string
  payload: any
}

const getData: any = async () => await AsyncStorage.getItem(key)
const saveData = (data: any) => {
  AsyncStorage.setItem(key, JSON.stringify(data))
}

let initData: any = getData().data

const reducer = (state = initData, { type, payload }: ActionType) => {

  console.log(state)

  const token: any = 'auth-token' in state ? tokenConfig(state.token) : ''

  switch (type) {

    // Auth Operation
    case Auth.isLoggedIn: {
      return axiosconfig.post('/is-login', {}, token)
        .then(res => {
          const newState = {
            ...state,
            authData: res.data
          }
          saveData(newState)
          return newState
        })
        .catch(() => state)
    }
    case Auth.login: {
      return axiosconfig.post('/login', payload)
        .then(res => {
          const newState = {
            ...state,
            'auth-token': res.data
          }
          saveData(newState)
          return newState
        })
    }
    // Class OPerations
    case Class.add: {

    }
    case Class.getByHost: {
      return axiosconfig
        .post(`/api/faculty/classes/${payload.id}`, {}, token)
        .then(res => {
          const newState = {
            ...state,
            classes: res.data
          }
          saveData(newState)
          return newState
        })
        .catch(() => state)
    }
    case Class.getBySec: {
      return axiosconfig.post(`/api/student/home/${payload.id}`, {}, token)
        .then(res => {
          const newState = {
            ...state,
            classes: res.data
          }
          saveData(newState)
          return newState
        })
        .catch(() => state)
    }
    default: return state
  }
}

export default {
  reducer,
  initData
}