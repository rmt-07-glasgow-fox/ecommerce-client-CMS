<template>
  <div class="navbar navbar-light bg-info">
    <div>
      <router-link to="/"
      class="btn btn-outline-secondary ml-3">Home</router-link>
      <router-link
      to="/login"
      class="btn btn-outline-secondary ml-3"
      >Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNotLogged'
}
</script>

<style scoped>
.navbar { background-color: #484848; }

.navbar .navbar-nav .nav-link { color: #fff; }

.navbar .navbar-nav .nav-link:hover { color: #fbc531; }

.navbar .navbar-nav .active > .nav-link { color: #fbc531; }
</style>
