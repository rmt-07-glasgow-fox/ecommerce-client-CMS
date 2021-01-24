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
  }
}
</script>

<style>
.col-md-4 {
  margin-top: 40px;
}
</style>
