<template>
  <div id="app">
    <div id="nav">
      <div v-if="currentPage === ''">
      <router-link to="/"
      class="btn btn-primary">Home</router-link> |
      <router-link
      to="/login"
      class="btn btn-success"
      >Login</router-link>
      </div>
      <div v-else-if="currentPage === 'home'">
      <router-link to="/"
      class="btn btn-primary">Home</router-link> |
      <router-link to="/products"
      class="btn btn-success">Products</router-link> |
      <button
      class="btn btn-danger"
      @click.prevent="logout">Logout</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      currentPage: 'home'
    }
  },
  methods: {
    logout () {
      this.$router.push('/')
      this.currentPage = ''
      this.$store.commit('successLogout')
    }
  },
  created () {
    if (!localStorage.access_token) {
      this.currentPage = ''
    }
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
