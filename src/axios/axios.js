const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-monyta.herokuapp.com/'
})

export default instance
