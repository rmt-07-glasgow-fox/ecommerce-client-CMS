<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" v-if="!access_token">Home | </router-link>
      <router-link to="/products">Products</router-link>
      <a href="" @click.prevent="userLogout" v-if="access_token"> | Logout</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    checkLogin () {
      console.log(this.access_token)
    },
    userLogout () {
      this.$store.commit('removeAccessToken')
    }
  },
  created () {
    this.checkLogin()
  },
  computed: {
    access_token () {
      return this.$store.state.access_token
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

body {
  background-color: lightsteelblue;
  /* min-height: 100vh; */
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
