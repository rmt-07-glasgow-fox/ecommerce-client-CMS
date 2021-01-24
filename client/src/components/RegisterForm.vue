<template>
  <div class="col-5">
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="Username">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser () {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      console.log(payload)
      this.$store.dispatch('registerUser', payload)
    }
  }
}
</script>

<style>

</style>
