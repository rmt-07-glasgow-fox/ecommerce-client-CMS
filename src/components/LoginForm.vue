<template>
<div class='container'>
  <div class='card'>
    <form @submit.prevent='login'>
      <!-- Email input -->
      <h3 class="h3 mb-3 font-weight-normal">Please login</h3>
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
      this.$emit('login', payload)
    }
  }
}
</script>

<style scoped>

</style>
