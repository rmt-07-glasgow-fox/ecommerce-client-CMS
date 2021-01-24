<template>
  <div class="container-fluid login">
    <Navbar></Navbar>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    Navbar
  }
}
</script>

<style scoped>
.login {
  background-image: url('../assets/ecommerce.jpg');
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
