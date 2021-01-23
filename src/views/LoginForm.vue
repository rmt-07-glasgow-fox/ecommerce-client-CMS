<template>
  <div class="login">
    <h1>Login to CMS</h1>
    <form class="p-4" @submit.prevent="login">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
        <div class="col-sm-7">
          <input v-model="user.email" type="email" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
        <div class="col-sm-7">
          <input v-model="user.password" type="password" class="form-control" id="inputPassword3">
        </div>
      </div>
      <div class="row mb-3">
        <a
        class="col-sm-5"
        @click.prevent="register">Sign Up here</a>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
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
      this.$router.push('/').catch(() => {})
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
