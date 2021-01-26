import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
// https://e-commerce-wearyfox.herokuapp.com/

export default instance
