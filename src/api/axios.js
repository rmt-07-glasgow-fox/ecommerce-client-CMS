import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://ecom-server-samm021.herokuapp.com'
})

export default axiosInstance
