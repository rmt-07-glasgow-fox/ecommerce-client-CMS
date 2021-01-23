<template>
  <div id="form-login">
    <h1>Form Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <input v-model="email" type="email" placeholder="Email" autofocus="autofocus" class="form-control">
      </div>
      <div class="form-group">
        <input v-model="password" type="password" placeholder="Password" class="form-control">
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
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
