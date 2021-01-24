import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-client-farhad.herokuapp.com'
})

export default instance
