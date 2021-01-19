<template>
  <div class="d-flex justify-content-center align-items-center bg-login">
    <login
      @login="login"
    />
  </div>
</template>

<script>
import Login from '../components/Login.vue'
// @ is an alias to /src

export default {
  components: { Login },
  name: 'Auth',
  methods: {
    login (email, password) {
      this.$emit('login', email, password)
    }
  }
}
</script>

<style scoped>
  .bg-login {
    height: 100vh;
    background-attachment: static;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0, 0, 0, 0.2)), color-stop(20%, rgba(0, 0, 0, 0.2)));
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 20%);
  }
</style>
