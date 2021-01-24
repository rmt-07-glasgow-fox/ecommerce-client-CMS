import axios from 'axios'

const ecommerceInstance = axios.create({
  baseURL: 'https://server-gardara.herokuapp.com/'
})

export default ecommerceInstance
