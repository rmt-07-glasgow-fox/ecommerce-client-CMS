import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-rivan.herokuapp.com/'
})

export default instance
