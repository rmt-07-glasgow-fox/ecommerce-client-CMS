import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecomersh8.herokuapp.com'
})

export default instance
