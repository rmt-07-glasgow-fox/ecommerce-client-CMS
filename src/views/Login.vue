<template>
<div id="login-bg">
  <div class="container" id="home">
    <h1 id="login-logo">E-commerce CMS</h1>
    <form class="" @submit.prevent='login'>
      <div class="form-group">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><img src="https://img.icons8.com/metro/26/000000/user-male.png"/></span>
          <input v-model="loginData.email" type="text" class="form-control" placeholder="input email">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"><img src="https://img.icons8.com/metro/26/000000/lock.png"/></span>
          <input v-model="loginData.password" type="password" class="form-control" placeholder="password" autocomplete="off">
        </div>
      </div>
      <button type="submit" id="btn-login" class="btn">Login</button>
    </form>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  methods: {
    login () {
      this.$store.dispatch('login', this.loginData)
    }
  },
  computed: {
    ...mapState([
      'loginData'
    ])
  }
}
</script>

<style>
#home {
  padding-top: 200px;
  max-width: 480px;
}
#basic-addon1 {
  height: 38px;
  margin-right: 10px;
}
#login-logo {
  margin-bottom: 75px;
  color: white;
}
#login-bg {
  background-color: rgb(43, 43, 43);
  min-height: 100vh;
}
#btn-login {
  color: rgb(25, 25, 25);
  background-color: rgb(235, 235, 235);
  width: 100px;
}
#btn-login:hover {
  color: rgb(235, 235, 235);
  background-color: rgb(66, 66, 66);
}
</style>
