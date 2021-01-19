<template>
  <div id="app">
    <router-view
      @loginData="handleLogin"
      @handleLogout="isLoggedOut"
      :products="this.products"
      :fetchProducts="fetchProducts"
      @handleAddProduct="handleAddProduct"
      @getDataById="getDataById"
      @deleteDataById="deleteDataById"
      :productById="this.productById"/>
  </div>
</template>

<script>
import axios from './api/axios'

export default {
  data () {
    return {
      products: [],
      productById: []
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
    },
    handleAddProduct (payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(res => {
          this.fetchProducts()
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getDataById (payload) {
      axios({
        method: 'GET',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          this.productById = res.data
          console.log(this.productById)
          this.$router.push('/editproduct/' + payload)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteDataById (payload) {
      console.log('KEKL', payload)
      axios({
        method: 'DELETE',
        url: 'products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.fetchProducts()
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
