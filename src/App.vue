<template>
  <div id="app">
    <div id="nav" v-if="isLogin == true">
      <router-link to="/" class="mx-3">Home</router-link>
      <router-link
        class="mx-3"
        to="/dashboard">Dashboard</router-link>
      <router-link to="/account"> Account </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
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
