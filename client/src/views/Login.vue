<template>
  <div>
    <div class="container border shadow p-3 mb-5 bg-white rounded">
      <div class="login">
          <h1>Login</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
            <button v-on:click.prevent="login" type="submit" class="btn btn-primary">Login</button>
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
