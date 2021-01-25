<template>
  <div class="row">
    <div class="col-md-4"></div>
    <LoginCard/>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
import LoginCard from '../components/loginCard'

export default {
  name: 'Login',
  components: {
    LoginCard
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
}
</script>

<style>
.col-md-4 {
  margin-top: 40px;
}
</style>
