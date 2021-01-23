import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-wearyfox.herokuapp.com/'
})

export default instance
