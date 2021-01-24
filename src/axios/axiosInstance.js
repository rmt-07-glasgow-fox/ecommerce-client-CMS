const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-dayu.herokuapp.com'
})

export default instance
