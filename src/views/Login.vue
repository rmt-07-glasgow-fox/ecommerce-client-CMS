<template>
    <div id="login-page">
      <div class="container">
        <div class="row" style="height: 15vh">

        </div>
        <div class="row mt-5">
          <div class="col-12 border black-text rounded login">
            <div class="login"></div>
            <div class="text-center mt-4">
              <h1>E-Commerce App</h1>
            </div>
            <div class="m-4 mt-4">
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
                    <small  id="emailHelp" class="form-text text-warning" v-if="errors"> {{ errors }}</small>
                  </div>
                </div>
                <div class="m-4">
                  <button class="btn btn-success m-3 mx-3" id="login-button" type="button" @click="login">Sign In</button>
                  <button class="btn btn-primary m-3 mx-3" id="noAcc-button" @click="registerButton">Don't Have Account</button>
                </div>
            </form>
          </div>
        </div>

        <div class="row" style="height: 29.5vh">

        </div>

      </div>
    </div>
</template>

<script>
import eCommerceAPI from '../api/e-commerceAPI'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: null
    }
  },
  methods: {
    login () {
      eCommerceAPI.post('/login', this.user)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('role', data.role)
          this.$emit('signInClicked')
          if (data.role === 'customer') {
            Swal.fire(
              'Signed in!',
              'Signed in as Customer',
              'Success'
            )
          } else if (data.role === 'admin') {
            Swal.fire(
              'Signed in!',
              'Signed in as Admin',
              'Success'
            )
          }

          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err.response.data, 'error login')
          this.errors = err.response.data.message
        })
    },
    registerButton () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
  .login {
    background: rgba(2, 31, 63, 0.5);
    color: #fff;
  }
</style>
