<template>
  <form @submit.prevent="loginUser">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-md-offset-5 col-md-3">
          <div class="form-login">
            <input v-model="login.email" type="text" id="userName" class="form-control input-sm chat-input" placeholder="email" />
            <br>
            <input v-model="login.password" type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" />
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
      const payload = this.login
      this.$store.dispatch('loginUser', payload)
      this.login.email = ''
      this.login.password = ''
      this.$router.replace('Products')
    }
  }
}
</script>

<style>

</style>
