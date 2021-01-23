import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cms-awancommerce.herokuapp.com'
})

export default instance
