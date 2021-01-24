<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="user.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="user.password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$emit('changePage', 'products')
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }
}
</script>

<style>
</style>
