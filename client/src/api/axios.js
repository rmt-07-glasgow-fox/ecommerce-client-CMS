import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cms-used-aircraft.herokuapp.com/'
})

export default instance
