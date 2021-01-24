import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://server-e-comm-2021.herokuapp.com/'
})

export default instance
