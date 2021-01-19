<template>
  <div id="app">
    <router-view @loginData="handleLogin" @handleLogout="isLoggedOut" :products="this.products" :fetchProducts="fetchProducts"/>
  </div>
</template>

<script>
import axios from './api/axios'

export default {
  data () {
    return {
      products: []
    }
  },
  components: { },
  methods: {
    handleLogin (payload) {
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('email', res.data.email)
          this.email = ''
          this.password = ''
          this.$router.push('/dashboard')
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err.response)
          this.email = ''
          this.password = ''
        })
    },
    isLoggedOut (payload) {
      if (payload) {
        localStorage.clear()
        this.$router.push('/')
      }
    },
    fetchProducts () {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          this.products = res.data
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  created () { }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background-color: #e4e3e3; */
}

</style>
