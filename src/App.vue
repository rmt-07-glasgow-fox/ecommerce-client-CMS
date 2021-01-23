<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/add">Add Product</router-link>
      <router-link to="/auth" class="right btn btn-primary"
       v-if="!isLogin">Login</router-link>
      <button class="right btn btn-danger"
       v-else
       @click.prevent="logout">Log Out</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    setupIsLogin () {
      this.$store.commit('getIsLogin')
    },
    logout () {
      this.$store.dispatch('tryLogout')
    }
  },
  created () {
    this.setupIsLogin()
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
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

.right{
  float: right;
  margin-top: -7px;
}
</style>
