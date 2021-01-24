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
              <h2>Sign Up</h2>
            </div>

            <form action="">
              <div class="mt-5 black-text">
                  <div class="m-1 m-3">
                    <label for="email" id="email-label">Email Address :</label>
                    <input class="form-control" v-model="user.email" type="text" id="email" required>
                    <small  id="emailHelp" class="form-text text-warning" v-if="errors.email"> {{ errors.email }}</small>
                  </div>
                  <div class="m-1 m-3">
                    <label for="password">Password :</label>
                    <input class="form-control" v-model="user.password" type="password" id="password" required>
                    <small  id="emailHelp" class="form-text text-warning" v-if="errors.password"> {{ errors.password }}</small>
                  </div>
                </div>
                <div class="m-4">
                  <button class="btn btn-success m-3 mx-3" type="button" @click="register">Sign Up</button>
                  <button class="btn btn-primary m-3 mx-3" type="button" @click="haveAcc">I Have Account</button>
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

export default {
  name: 'Register',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    register () {
      eCommerceAPI.post('/register', this.user)
        .then(({ data }) => {
          return eCommerceAPI.post('/login', this.user)
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('role', data.role)
          this.$emit('signInClicked')
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err.response.data, 'error register')
          err.response.data.errors.forEach(e => {
            if (e.includes('email')) {
              this.errors.email = e
            }
            if (e.includes('Password')) {
              this.errors.password = e
            }
          })
        })
    },
    haveAcc () {
      this.$router.push('/login')
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
