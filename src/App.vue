<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
            <router-link style="color: white" to="/">Home</router-link> |
        </li>
        <li class="nav-item">
            <router-link style="color: white" to="/products">Products</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      access_token: false
    }
  },
  methods: {
    cekToken () {
      if (localStorage.access_token) {
        this.access_token = true
      } else {
        this.access_token = false
      }
    },
    logout () {
      localStorage.clear()
    }
  },
  created () {
    this.cekToken()
    // this.logout()
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
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
