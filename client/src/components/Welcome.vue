<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>WELCOME E-COMMERCE CMS</h1><br>
      <li><a @click.prevent="enter" href="#" class="btn btn-dark "><i class="fas fa-sign-out-alt"></i> Login</a></li>
    <a href=""></a>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    enter () {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  list-style: none;
  text-decoration: none;
}
</style>
