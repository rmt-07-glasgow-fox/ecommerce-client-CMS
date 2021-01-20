<template>
  <div id="app">
    <div id="nav" class="nav">
      <div class="px-3 py-2">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d6f91;
  background-color: #eeeeee;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4d6f91;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav{
  background-color: #222831;
}
</style>
