<template>
  <div class="vh-100 vw-100 bg-info">
    <div class="container card">
      <h4>Login</h4>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email address</label>
          <input v-model="inputLogin.email" type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            v-model="inputLogin.password"
            type="password"
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      inputLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      // console.log('>>> input login', this.inputLogin)
      await this.$store.dispatch('login', this.inputLogin)
      this.$router.push('/products')
    }
  }
}
</script>
