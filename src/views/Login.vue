<template>
  <div class="login">
    <LoginForm
      @loginHandle='loginHandle'
    />
  </div>
</template>

<script>
import axios from '@/api/axios'
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    loginHandle (payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          console.log(res.data)
          this.user = {}
          localStorage.setItem('access_token', res.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.login {
  width: 500px;
  margin: auto;
}
</style>
