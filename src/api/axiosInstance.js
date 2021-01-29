import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-esd20.herokuapp.com'
})

export default instance
