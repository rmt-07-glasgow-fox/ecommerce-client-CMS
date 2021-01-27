import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://radiant-headland-12217.herokuapp.com/'
  baseURL: 'http://localhost:3000'
})

export default instance
