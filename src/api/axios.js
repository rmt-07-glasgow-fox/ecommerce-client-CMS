import axios from 'axios'

const initAxios = axios.create({
  baseURL: 'http://funorama-server.herokuapp.com/'
})

export default initAxios
