<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <button v-on:click="logOut()" class="btn btn-danger btn-sm">Log Out</button>
          </div>
        </div>
      </nav>
    </div>
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
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
