import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-server-by-rozakus.herokuapp.com'
})

export default instance
