<template>
    <!-- LOGIN PAGE -->
  <div id="loginPage" class="container-fluid">
    <div class="row" style="justify-content: center;">
      <div class="loginContainer col-4 rounded" style="background-color: aliceblue;">
        <div>
          <h3 class="m-3">Login</h3>
        </div>
        <form style="margin: 0 auto;" v-on:submit.prevent="login" >
          <div class="my-3">
            <input type="text" v-model="email" placeholder="Email">
          </div>
          <div class="my-3">
            <input type="password" v-model="password" placeholder="Password">
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

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
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((response) => {
          console.log('Login success!')
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('user', this.email)
          this.email = ''
          this.password = ''
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log('errResp:', err)
        })
    }
  }
}
</script>

<style>

</style>
