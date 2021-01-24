<template>
  <div class="login">
    <div class="form-page">
      <div class="container" id="login-page">
        <div>
          <h4 class="text-center">Login</h4>
        </div>
        <hr />
        <form @submit.prevent="loginPost">
          <div class="form-group">
            <label>Email address :</label>
            <input
              v-model="email"
              type="text"
              name="email-login"
              id="email-login"
              class="form-control"
              placeholder="Input your email"
            />
            <label>Password :</label>
            <input
              v-model="password"
              type="password"
              name="password-login"
              id="password-login"
              class="form-control"
              placeholder="Input your password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-danger" id="login-btn">
            login
          </button>
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
    loginPost () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('login', payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.form-page .container {
  width: 30%;
  margin-top: 5%;
  padding: 30px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
}

.form-group {
  text-align: left;
}

#login-btn {
  width: 10vw;
}
</style>
