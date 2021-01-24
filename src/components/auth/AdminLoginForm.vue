<template>
  <div id="AdminLoginForm">
    <div class="main-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col align-self-center">
            <div class="card card-admin-login">
              <div class="card-body">
                <div style="text-align: center">
                  <img src="@/assets/img_logoLineC.svg" class="login-logo" />
                </div>
                <h1
                  style="text-align: center; font-size: 24px; padding-top: 16px"
                >
                  Login
                </h1>
                <p
                  style="
                    text-align: center;
                    font-size: 16px;
                    padding-top: 8px;
                    margin: 0;
                  "
                >
                  Use your admin account.
                </p>

                <form @submit.prevent="loginAdmin" style="padding-top: 24px">
                  <input
                    v-model="payload.email"
                    type="email"
                    class="form-control"
                    id="email-admin-login"
                    style="height: 54px; margin-top: 8px"
                    placeholder="Email"
                  />

                  <input
                    v-model="payload.password"
                    :type="passwordType"
                    class="form-control"
                    id="password-admin-login"
                    style="height: 54px; margin-top: 16px"
                    placeholder="Password"
                  />

                  <div class="form-check" style="margin-top: 9px">
                    <input
                      @click="showAdminPassword"
                      type="checkbox"
                      class="form-check-input"
                      id="show-admin-password-login"
                    />
                    <label
                      class="form-check-label"
                      for="show-admin-password-login"
                      style="text-align: left"
                      >Show password</label
                    >
                  </div>

                  <div style="margin-top: 32px">
                    <p style="font-size: 14px">
                      Not staff member? Please login through home page.
                      <a href="" style="text-decoration: none"
                        ><b>Through here</b></a
                      >
                    </p>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    style="
                      margin-top: 26px;
                      margin-bottom: 20px;
                      padding-left: 16px;
                      padding-right: 16px;
                      font-weight: 500;
                    "
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLoginForm',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      },
      passwordType: 'password'
    }
  },
  methods: {
    loginAdmin () {
      this.$store.dispatch('loginAdmin', this.payload)
    },
    showAdminPassword () {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  height: 100vh;
}
div > .row {
  height: 100vh;
}

.login-logo {
  height: 24px;
}

.card {
  border-radius: 0.4rem;
}

.card-admin-login {
  width: 368px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 48px;
  padding-right: 40px;
  padding-bottom: 36px;
  padding-left: 40px;
}

@media screen and (max-width: 600px) {
  div > .col {
    padding: 0;
  }
  .card {
    height: 100vh;
    width: 100vh;
    margin: 0;
  }
  .card-admin-login {
    width: auto;
    border: none;
  }
}

@media screen and (max-width: 320px) {
  .login-logo {
    width: 60vw;
  }
}

.card-body {
  padding: 0;
}
</style>
