<template>
  <div class="vh-100 vw-100 bg-info p-5">
    <div class="container card text-center h-80 p-5">
      <h4 class="my-3">Admin Login E-commerce</h4>
      <form @submit.prevent="login" class="my-5">
        <div class="form-group d-flex flex-row">
          <label class="mx-5">Email address</label>
          <input v-model="inputLogin.email" type="email" class="form-control" />
        </div>
        <div class="form-group d-flex flex-row">
          <label class="mx-5">Password</label>
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
