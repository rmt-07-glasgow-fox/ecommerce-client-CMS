import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-server-ibnu.herokuapp.com/'
})

export default instance
