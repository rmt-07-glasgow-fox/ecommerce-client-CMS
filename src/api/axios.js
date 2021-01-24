import axios from 'axios'

const initAxios = axios.create({
  baseURL: 'https://funorama-server.herokuapp.com/'
})

export default initAxios
