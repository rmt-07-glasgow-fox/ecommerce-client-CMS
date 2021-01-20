<template>
<div class='container'>
    <form class='login-form' @submit.prevent='login'>
      <!-- Email input -->
      <h2 class="mb-4 font-weight-bold">Please login</h2>
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" v-model="email" required="" autofocus="" />
        <label class="form-label" for="form2Example1">Email address</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" v-model="password" required="" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Login</button>
    </form>
</div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
.login-form {
  min-width: 500px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem
}
@media (max-width: 500px) {
  .login-form {
    min-width: 90%;
  }
}
</style>
