<template>
  <div>
    <div class="navbar navbar-light bg-info">
      <div>
        <router-link to="/"
        class="btn btn-outline-secondary ml-3">Home</router-link>
        <router-link
        to="/login"
        class="btn btn-outline-secondary ml-3"
        >Login</router-link>
      </div>
    </div>
    <div class="login">
      <h1>Login to CMS</h1>
      <form class="px-3 py-5" @submit.prevent="login">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-8">
            <input v-model="user.email" type="email" class="form-control" id="inputEmail3">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-8">
            <input v-model="user.password" type="password" class="form-control" id="inputPassword3">
          </div>
        </div>
        <div class="row mb-3">
          <a
          class="col-sm-12"
          @click.prevent="register">Sign Up here</a>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginUser', this.user)
    },
    register () {
      this.$router.push('/register')
    }
  },
  created () {
    if (!localStorage.access_token) {
      console.log('belum ada access_token')
    } else {
      console.log('ini setelah login')
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

form {
  width: 500px;
  align-self: center;
  border: 1px lightblue solid;
  border-radius: 20px;
}

.login {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>
