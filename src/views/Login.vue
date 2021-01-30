<template>
    <!-- Login -->
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="login" class="form-control p-4" style="width: 350px; height: 450px;">

        <h1 class="mb-5" style="text-align: center;">Login</h1>
        <div class="form-floating mb-3">
          <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-5">
          <input v-model="password" type="password" class="form-control " id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>
        <button type="submit" class="btn btn-primary col-12 mx-auto" style="text-align: center;">Login</button>
      </form>

    </div>
  </div>
  <!-- Login -->
</template>

<script>
export default {
  name: 'Login',
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

<style>

</style>
