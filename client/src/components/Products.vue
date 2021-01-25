<template>
  <div>
    <h3>ini list product</h3>
  </div>
</template>

<script>
import axios from '../api/axios.js'

export default {
  name: 'Products',
  methods: {
    fetchProducts () {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
