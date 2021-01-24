import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-esd20.herokuapp.com',
  timeout: 1000
})

export default instance
