import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://r-ecom-cms-server.herokuapp.com'
})

export default instance
