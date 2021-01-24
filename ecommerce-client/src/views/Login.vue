<template>
   <div class="container">
    <div class="row" style="display: flex; height: 100vh; align-items: center;">
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
      <div class="col-md-4 col-sm-4 col-xs-12 rounded shadow-lg">
        <h3>Login</h3>
        <!-- Login -->
        <div id="login">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="payload.email" placeholder="Enter your email address">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="payload.password" placeholder="Enter your password">
            </div>
            <button type="submit" class="btn btn-primary" id="login-btn" @click.prevent="login" style="float: right;">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios
        .post('/login', this.payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$router.push('/products')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
