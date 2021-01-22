<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

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
  color: #2c3e50;
}

#nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: white;
}

#content a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
  margin-left: 20px;
}

#logout a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
  margin-left: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
