import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-style-by-manda.herokuapp.com'
})

export default instance
