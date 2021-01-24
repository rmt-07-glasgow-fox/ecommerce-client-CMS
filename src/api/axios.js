import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-jan.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})

export default instance
