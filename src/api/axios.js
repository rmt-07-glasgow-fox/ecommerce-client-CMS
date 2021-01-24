import axios from 'axios'

const initAxios = axios.create({
  baseURL: 'http://localhost:3000'
})

export default initAxios
