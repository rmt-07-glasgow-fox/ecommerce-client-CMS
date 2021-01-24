import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://guarded-atoll-92920.herokuapp.com'
})

export default instance
