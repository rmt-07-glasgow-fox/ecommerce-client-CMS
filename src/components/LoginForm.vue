<template>
  <form @submit.prevent="loginUser">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-md-offset-5 col-md-3">
          <div class="form-login">
            <input v-model="login.email" type="text" id="userName" class="form-control input-sm chat-input" placeholder="email" />
            <br>
            <input v-model="login.password" type="text" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
            <br>
            <div class="wrapper">
              <span class="group-btn">
                <button class="btn btn-primary" type="submit">login</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'LoginForm',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: this.login.email,
          password: this.login.password
        }
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        this.login.password = ''
        console.log(localStorage.access_token)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
