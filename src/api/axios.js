import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-2424.herokuapp.com'
})

export default instance
