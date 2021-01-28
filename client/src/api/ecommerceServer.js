import axios from 'axios'

const ecommerceInstance = axios.create({
  baseURL: 'https://server-gardara-ecommerce.herokuapp.com/'
})

export default ecommerceInstance
