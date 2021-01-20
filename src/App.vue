<template>
  <div id="app">
    <div id="nav" v-if="isLogin == true">
      <router-link to="/" class="mx-3">Home</router-link>
      <router-link to="/about" class="mx-3">About</router-link>
      <a href="#" class="mx-3"
        @click.prevent="logout">Logout</a>
      <router-link
        class="mx-3"
        to="/dashboard">Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    this.$store.dispatch('auth')
    this.$store.dispatch('fetchProducts')
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
