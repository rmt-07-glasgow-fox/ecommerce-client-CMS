import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://beautiv.herokuapp.com'
})

export default instance
