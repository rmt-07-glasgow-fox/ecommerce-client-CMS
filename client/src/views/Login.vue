<template>
  <div class="row my-3" style="min-height: 100vh;">
    <div class="col-md-6">
      <img src="@/assets/logo2.png" width="70%" style="max-width: 500px"/>
    </div>
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <form @submit.prevent="login">
        <h2>Login</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
import swal from 'sweetalert'

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
        method: 'post',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          swal(err.response.data.msg.join(','), '', 'error')
        })
    }
  }
}
</script>
