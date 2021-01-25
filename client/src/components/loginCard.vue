<template>
  <div class="col-md-4 card">
    <form v-on:submit.prevent="login">
      <h2>LOGIN</h2>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" v-model="loginEmail" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="loginPassword" class="form-control" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <!--<button class="btn btn-light" id="google-btn" v-on:click="loginWithGoogle">-->
    <!--<img id="google-logo" src="https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg">-->
    <!--</button>-->
  </div>
</template>

<script>
import axios from '../api/axios.js'

export default {
  name: 'LoginCard',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: this.loginEmail,
          password: this.loginPassword
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.form-group {
  margin-top: 5px;
}
button {
  margin: 10px 0px;
}
</style>
