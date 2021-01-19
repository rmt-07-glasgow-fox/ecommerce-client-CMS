<template>
  <div class="container">
    <h1>Ini page login</h1>
    <form>
      <h2>LOGIN</h2>
      <div>
        <label for="login-email" >Email address</label>
        <input type="email" v-model="user.email" id="login-email">
      </div>
      <div>
        <label for="login-password">Password</label>
        <input type="password" v-model="user.password" id="login-password">
      </div>
      <div>
        <button @click.prevent="login" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$emit('login', this.user)
    }
  }
}
</script>
