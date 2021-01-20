<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
body {
    background: url(https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center center no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
