import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://shoescorner.herokuapp.com/'
})

export default instance
