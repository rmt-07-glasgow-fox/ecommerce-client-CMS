import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ekomerse.herokuapp.com/'
})

export default instance
