<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import './assets/vendor/fontawesome-free/css/all.min.css';
@import './assets/css/sb-admin-2.min.css';
@import './assets/vendor/datatables/dataTables.bootstrap4.min.css';

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
