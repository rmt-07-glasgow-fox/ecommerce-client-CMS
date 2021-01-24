import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://phitonthel-ecommerce-cms.herokuapp.com'
})

export default instance
