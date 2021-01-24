<template>
  <div class="container">
    <div class="row justify-content-center">
      <h2 class="text-center">Register</h2>
    </div>
    <div class="row justify-content-center">
      <RegisterForm/>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style>

</style>
