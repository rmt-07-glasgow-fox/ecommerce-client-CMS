<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark d-flex justify-content-end">
      <a class="navbar-brand" href="#"><router-link to="/">Home</router-link></a>
      <a class="navbar-brand" href="#"><router-link to="/about">About</router-link></a>
      <a v-if="!getAccesstoken" class="navbar-brand" href="#"><router-link to="/login">Login</router-link></a>
      <a v-if="getAccesstoken" @click="logout()" class="navbar-brand" href="#">Logout</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accesstoken: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    getAccesstoken () {
      return this.$store.state.accesstoken
    }
  }
}
</script>

<style>
body {
  background: #1f2e3d;
}

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
