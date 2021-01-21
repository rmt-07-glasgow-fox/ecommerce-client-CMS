<template>
    <div class="loginpage container-fluid d-flex">
      <div class="row justify-content-center align-self-center w-100">
        <form class="p-2 ml-4" @submit.prevent="login">
          <div>
            <h1>ANTZ SHOP CMS</h1>
            <hr>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="material-icons">email</i>
              </span>
            </div>
            <input type="email" class="form-control" placeholder="Email" autofocus v-model="email">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="material-icons">lock</i>
              </span>
            </div>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: '/login/admin',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        this.$router.push({ name: 'Dashboard' })
        this.email = ''
        this.password = ''
      }).catch(err => {
        console.log(err.response.data.message)
        this.email = ''
        this.password = ''
      })
    }
  }
}
</script>

<style>
  .loginpage {
    height: 100vh;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.603), rgba(117, 81, 51, 0.829)), url('../assets/cover.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
