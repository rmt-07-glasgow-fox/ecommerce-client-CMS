<template>
    <div class="login d-flex justify-content-arround w-75 mx-auto text-light">
      <div class="text-center">
        <h3 class="mb-3">This app just for administrator area</h3>
        <img class="img" src="../../assets/cms.svg" alt="">
      </div>
      <div class="rounded mx-auto">
        <div class="shadow rounded">
          <div id="login" class="p-5">
            <div class="mb-3 text-center">
              <h4>Login</h4>
            </div>
            <form @submit.prevent="handleLogin" class="mb-3" id="form-login">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="user.email" type="email" class="form-control" id="email">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="user.password" type="password" class="form-control" id="password">
              </div>
              <button type="submit" class="btn btn-primary w-100" id="submit-login">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('handleLogin', this.user)
    }
  }
}
</script>

<style scoped>
.img {
  height: 20rem;
  width: 30rem;
}
.login {
  margin-top: 10rem;
}
</style>
