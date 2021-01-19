<template>
  <div id="app">
    <router-view
      @login="login"
      @logout="logout"
      @addProduct="addProduct"
      :products="products"
    />
  </div>
</template>

<script>
import axios from './api/axios'
import Swal from 'sweetalert2'

export default {
  name: 'App',
  data () {
    return {
      products: []
    }
  },
  methods: {
    checkAuth () {
      // if (localStorage.access_token) {
      //   this.$router.push('/')
      // } else {
      //   this.$router.push('/login')
      // }
    },
    login (email, password) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.username = data.email
          this.checkAuth()
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    logout () {
      localStorage.clear()
      this.checkAuth()
    },
    getProduct () {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    addProduct (name, price, stock, imageUrl) {
      axios({
        method: 'POST',
        url: '/products',
        data: {
          name,
          price,
          stock,
          image_url: imageUrl
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.$router.push('/')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    }
  },
  created () {
    this.checkAuth()
    this.getProduct()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
