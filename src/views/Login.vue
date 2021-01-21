<template>
  <div class="home">
    <Navbar></Navbar>
    <form class="container" @submit.prevent='login'>
      <div class="form-group">
        <label>Email address</label>
        <input v-model="email" type="email" class="form-control" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from '../config/axios'
// @ is an alias to /src
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        this.$router.push({ name: 'Home' })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
