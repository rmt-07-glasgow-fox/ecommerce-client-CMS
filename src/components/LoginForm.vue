<template>
  <div>
    <form @submit.prevent="login" class="col-4 mx-auto mt-5 border pb-3">
      <div class="row mb-3">
        <img class="login-banner mx-auto" alt="" src="../assets/ecommerce-login-banner.jpeg"/>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label" for="email">Email</label>
        <div class="col-sm-9">
          <input required v-model="email" class="form-control" name="email" placeholder="Email" type="text" value=""/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-3 col-form-label" for="password">Password</label>
        <div class="col-sm-9">
          <input required v-model="password" class="form-control" name="password" placeholder="Password" type="password" value=""/>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      }).then(({ data }) => {
        if (data.role === 'admin') {
          localStorage.access_token = data.access_token
          this.password = ''
          this.email = ''
          this.$router.push({ name: 'Dashboard' })
        } else {
          throw new Error('Please check your email/password')
        }
      }).catch((err) => {
        const errorMessage = err.response ? err.response.data.message : err.message

        this.password = ''
        this.showError(errorMessage)
      })
    },
    showError (message) {
      this.$dlg.alert(message, {
        messageType: 'error',
        icon: false
      })
    }
  }
}
</script>

<style scoped>
label {
  text-align: left;
}

.login-banner {
  width: 100%;
}
</style>
