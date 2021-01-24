<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="!user" to="/login" :cek="cek">Login </router-link>
      <div v-else-if="user" >
      <router-link to="/products">Products</router-link> |
      <button class="btn" @click="logout" to="/login"> Logout</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: localStorage.getItem('access_token')
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
      localStorage.clear()
      this.cek()
    },
    cek () {
      if (this.user) {
        this.$router.push('/products')
      } else {
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.cek()
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
