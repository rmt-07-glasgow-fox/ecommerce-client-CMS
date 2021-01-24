import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-week-3.herokuapp.com/'
})

export default instance
