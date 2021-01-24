import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-69696.herokuapp.com'
})

export default instance
