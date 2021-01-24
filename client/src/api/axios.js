import axios from 'axios'

const serverProduction = 'https://server-ecommerce-nur.herokuapp.com/'
// const serverDevelopment = 'http://localhost:3000'

const api = axios.create({
  baseURL: serverProduction
})
export default api
