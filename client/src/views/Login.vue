<template>
  <div class="row">
    <div class="col-6 left" style="padding-top: 100px">
      <div id="login-content" class="container border shadow-lg p-3 mb-5 bg-light bg-gradient rounded">
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
        <div>
        </div>
        <div class="register mt-3">
          Dont have an account?
          <a href="#" data-bs-toggle="modal" data-bs-target="#register"> Sign up>> </a>
            <div class="modal fade" id="register" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content container border shadow-lg p-3 mb-5 bg-light bg-gradient rounded">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body ">
                    <form>
                      <div class="mb-3">
                        <label for="emailregister" class="form-label">Email address</label>
                        <input v-model="registerEmail" type="email" class="form-control" id="emailregister">
                      </div>
                      <div class="mb-3">
                        <label for="passwordregister" class="form-label">Password</label>
                        <input v-model="registerPassword" type="password" class="form-control" id="passwordregister">
                      </div>
                        <button v-on:click.prevent="register" type="submit" class="btn btn-primary">Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col-6" id="login-page">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      registerEmail: '',
      registerPassword: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          this.$swal(err.response.data.message)
          console.log(err.response)
        })
    },
    register () {
      const user = {
        email: this.registerEmail,
        password: this.registerPassword
      }
      this.$store.dispatch('register', user)
        .then(({ data }) => {
          this.$router.push('/')
          this.$swal('Thank you for registering, unfortunately only admins are allowed at this moment.')
          this.registerEmail = ''
          this.registerPassword = ''
        })
        .catch(err => {
          this.registerEmail = ''
          this.registerPassword = ''
          this.$swal(err.response.data.errors[0])
        })
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  height: 350px;
  width: 350px;
}
.login {
  padding-left: 5%;
  padding-right: 5%;
}

.left {
  height: 100vh;
  background-color:rgba(134, 233, 135, 0.5)
}

#login-page {
  background-attachment: fixed;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
</style>
