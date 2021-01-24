import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://commerce-project-server.herokuapp.com/'
})

export default instance
