<template>
  <div>
      <form class="container" @submit.prevent="login">
        <div style="margin: 30px 350px 30px 350px">
          <div>
              <label>Email</label>
              <input
              type="email"
              class="form-control"
              placeholder="Enter your email.."
              v-model="data.email"
              required
              />
          </div>
          <div>
              <label>Password</label>
              <input
              type="password"
              class="form-control"
              placeholder="Your password.."
              v-model="data.password"
              required
              />
          </div>
          <button style="margin: 10px 10px" class="btn btn-success">Login</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.data)
      this.$store.dispatch('login', this.data)
    }
  }
}
</script>

<style>

</style>
