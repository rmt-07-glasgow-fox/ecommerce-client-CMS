import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://radiant-headland-12217.herokuapp.com/'
})

export default instance
