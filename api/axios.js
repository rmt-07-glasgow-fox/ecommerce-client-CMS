import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://h8-e-commerce-server.herokuapp.com/'
})

export default instance