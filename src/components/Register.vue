<template>
  <div>
  <div class="container" id="register-form" style="margin-top:80px;">
    <div class="row g-0">
      <div class="col-sm-6 col-md-8 ">
      </div>
      <div class="col-sm-6 col-md-4" style="width: auto; padding: 20px; background-color: #5c6e91; border-radius: 25px; border: 2px solid #73AD21;">
        <form class="form-container" @submit.prevent="registerSubmit">
          <h3 class="register-p" style="color: #cfd3ce">Register</h3>
          <div class="mb-3">
            <label for="name-register" class="form-label" style="color: #cfd3ce">Name</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" v-model="name">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="col-auto">
            <button class="btn btn-danger" type="submit" id='register-submit'>Register</button>
            <button class="btn btn-secondary ml-2" type="button" @click="goToLogin">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
