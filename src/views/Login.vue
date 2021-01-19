<template>
    <div id="login-page" v-if="currentPage === 'login-page'" class="bg-image">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 border bg-white black-text">
            <div class="text-center">
              <h1>E-Commerce App</h1>
            </div>
            <div class="m-4 mt-5">
              <h2>Sign In</h2>
            </div>

            <form action="">
              <div class="mt-5 black-text">
                  <div class="m-1 m-3">
                    <label for="email" id="email-label">Email Address :</label>
                    <input class="form-control" v-model="user.email" type="text" id="email" required>
                  </div>
                  <div class="m-1 m-3">
                    <label for="password">Password :</label>
                    <input class="form-control" v-model="user.password" type="password" id="password" required>
                  </div>
                </div>
                <div class="m-4">
                  <button class="btn btn-success" id="login-button" type="button" @click="signIn">Sign In</button>
                  <button class="btn btn-primary" id="noAcc-button">Don't Have Account</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: ['currentPage'],
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      this.$emit('signInClicked', this.user)
    }
  }
}
</script>
