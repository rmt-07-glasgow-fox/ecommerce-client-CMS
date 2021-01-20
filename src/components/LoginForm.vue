<template>
  <div class="container-fluid bg-dark" id="login-container" style="height: 100vh">
    <div class="row justify-content-center h-100 align-items-center">
      <div class="col-3">
        <h3 class="align-self-start text-center mb-5 text-white">E-COMMERCE CMS</h3>
        <form @submit.prevent="handleLogin">
          <div class="form">
            <div class="p-3">
              <label for="email" class="text-white">Email:</label>
              <input v-model="email" id="email" type="text" class="form-control" placeholder="email">
            </div>
            <div class="p-3">
              <label for="password" class="text-white">Password</label>
              <input v-model="password" id="password" type="password" class="form-control" placeholder="password">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-4 bg-white rounded justify-content-center mb-3">
              <button class="w-100 btn" type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
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
    handleLogin () {
      this.$store.dispatch('handleLogin', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>
