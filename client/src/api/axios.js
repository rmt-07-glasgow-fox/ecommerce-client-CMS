import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://ecomerce-cms.herokuapp.com'
})

export default instance
