import axios from 'axios'

const ecommerceInstance = axios.create({
  baseURL: 'https://gardara-server.herokuapp.com/'
})

export default ecommerceInstance
