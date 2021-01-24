import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cryptic-tundra-62258.herokuapp.com/'
})

export default instance
