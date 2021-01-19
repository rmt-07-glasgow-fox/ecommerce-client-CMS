<template>
  <div id="app">
    <router-view
      @login="login"
      :loading="loading"
      :email="email"
      :password="password"
    />
  </div>
</template>

<script>
import axios from '../src/api/axios.js'

export default {
  name: 'App',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    clearFormLogin () {
      this.email = ''
      this.password = ''
    },

    async login (payload) {
      try {
        this.loading = true
        const response = await axios.post('/login', payload)
        this.loading = false
        const accessToken = response.data.access_token
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
          title: 'Success'
        }).then(() => {
          localStorage.setItem('access_token', accessToken)
          this.clearFormLogin()
        })
      } catch (err) {
        console.log(err.response.status)
        this.loading = false
        if (err.response.status === 400) {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not Authorized'
          })
        }
      }
    }
  }
}
</script>

<style>
/* #app {
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
} */
</style>
