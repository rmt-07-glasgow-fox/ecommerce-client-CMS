<template>
  <div id="form-login" class="container">
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
import axios from '../api/axios'
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
      // const payload = {
      //   email: this.email,
      //   password: this.password
      // }

      // this.$emit('onLogin', payload)

      axios({
        method: 'post',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log('CEK', data)
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/home')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
