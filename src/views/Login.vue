<template>
  <div class="main-wrapper">
    <div class="container-fluid justify-content-center">
      <div class="row auth-row">
        <div class="col align-self-center">
          <div id="auth-logo" class="text-center">
            <img src="../assets/img_logoLineC.png" class="mb-4" width="256" />
          </div>

          <login-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
// @ is an alias to /src
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.main-wrapper {
  height: 100vh;
}

div > .auth-row {
  height: 100vh;
}
</style>
