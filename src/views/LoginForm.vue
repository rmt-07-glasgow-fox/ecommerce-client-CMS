<template>
  <div>
    <Navbar/>
    <div class="col-3 mx-auto my-4" id="login-page">
      <h2 class="my-3">Login</h2>
      <form @submit.prevent="login">
      <div class="form-floating mb-3 mt-3">
          <input v-model="email" type="email" class="form-control" id="login-email" placeholder="name@example.com">
          <label for="login-email">Email address</label>
      </div>
      <div class="form-floating mb-3">
          <input v-model="password" type="password" class="form-control" id="login-password" placeholder="Password">
          <label for="login-password">Password</label>
      </div>
      <input class="btn btn-primary" type="submit" value="Login">
      </form><br>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>

<style>

</style>
