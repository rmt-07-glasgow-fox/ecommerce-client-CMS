import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-glasgow-server.herokuapp.com'
})

export default instance
