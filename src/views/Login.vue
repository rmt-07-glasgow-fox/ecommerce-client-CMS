<template>
    <!-- LOGIN PAGE -->
  <div id="loginPage" class="container-fluid">
    <h1>Please login as an admin</h1>
    <h3>{{notif}}</h3>
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
      password: '',
      notif: ''
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
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('role', response.data.role)
          localStorage.setItem('access_token', response.data.access_token)
          this.email = ''
          this.password = ''
          this.notif = ''
          this.$store.commit('setLoginStatus', true)
          this.$store.commit('setNotification', 'Login success!')
          this.$router.push('/notification')
        })
        .catch((err) => {
          console.log(err.response.data.message)
          this.notif = err.response.data.message
        })
    }
  }
}
</script>

<style>

</style>
