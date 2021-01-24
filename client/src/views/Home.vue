<template>
  <div class="home">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/navbar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>
