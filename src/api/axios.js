import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-porto3.herokuapp.com/'
})

export default instance
