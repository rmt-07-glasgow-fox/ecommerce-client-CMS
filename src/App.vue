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
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/dashboard')
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
