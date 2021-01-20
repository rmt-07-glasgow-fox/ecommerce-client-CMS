<template>
  <div class="container border shadow p-3 mb-5 bg-white rounded">
    <div class="login">
      <LoginCard/>
    </div>
  </div>
</template>

<script>
import LoginCard from '../components/LoginCard'
export default {
  name: 'Login',
  components: {
    LoginCard
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      console.log(user)
      this.$store.dispatch('login', user)
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  padding: 20px;
  height: 450px;
  width: 350px;
}
.login {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
