<template>
    <div class="container" id='login-form' style="margin-top:80px">
    <div class="row g-0">
      <div class="col-sm-6 col-md-8 ">
      </div>
      <div class="col-sm-6 col-md-4" style="width: auto; padding: 20px; background-color: #5c6e91; border-radius: 25px; border: 2px solid #73AD21;">
        <form class="form-container" @submit.prevent="loginSubmit">
          <h3 class="login-p">Login</h3>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="payload.email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="register-password" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="payload.password">
          </div>
          <button type="submit" class="btn btn-primary" id="login-btn" >Log In</button>
          <button class="btn btn-success ml-2" type="button" @click="goToRegister">Register</button>
          <!-- <div>
            <br>
            <h5> or Sign in by Google</h5>
            <br>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/register')
    },
    loginSubmit () {
      this.$store.dispatch('loginSubmit', this.payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
