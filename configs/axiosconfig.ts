import axios from 'axios'
import dbURL from '../constants/DataBaseURL'

export default axios.create({
  baseURL: dbURL
})
