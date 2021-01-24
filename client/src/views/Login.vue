<template>
  <div>
    <Navbar/>
    <div style="width:100%; height:100vh;" class="d-flex justify-content-center align-items-center">
      <div id="login-form">
        <form class="login-form" @submit.prevent="login">
          <h1 class="h3 mb-3 fw-normal text-center">Login</h1>
          <input type="email" class="form-control mb-2" v-model="data.email" placeholder="Email address" autofocus>
          <input type="password" class="form-control mb-2" v-model="data.password" placeholder="Password">
          <button class="w-100 btn btn-lg btn-primary mb-2" type="submit" id="btn-login">Login</button><br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.data)
        .then(response => {
          // console.log(response)
          localStorage.access_token = response.data.access_token
          this.$router.push('/')
          this.$store.dispatch('sweetSuccess', 'Login Success')
        })
        .catch(err => {
          const message = err.response.data.message
          this.$store.dispatch('sweetError', message)
        })
    }
  },
  created () {
    this.$store.dispatch('changePageTitle', 'login')
  }
}
</script>

<style>
#login-form{
    width: 30%;
}
</style>
