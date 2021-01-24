import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-h8.herokuapp.com'
})

export default instance
