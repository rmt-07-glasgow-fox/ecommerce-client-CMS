<template>
  <div
    id="login-form"
    style="margin-left: auto; margin-right: auto; width: 320px"
  >
    <h3 class="text-center" style="font-weight: 600">Welcome back!</h3>
    <p class="text-center">Login to get going.</p>

    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email-login" class="form-label">Email address</label>
        <input
          v-model="payload.email"
          type="email"
          class="form-control"
          id="email-login"
        />
      </div>
      <div class="mb-3">
        <label for="password-login" class="form-label">Password</label>
        <input
          v-model="payload.password"
          :type="passwordType"
          class="form-control"
          id="password-login"
        />
      </div>
      <div class="mb-3 form-check">
        <input
          @click="showPassword"
          type="checkbox"
          class="form-check-input"
          id="show-password-login"
        />
        <label class="form-check-label" for="show-password-login"
          >Show password</label
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary w-100"
        style="font-weight: 600; letter-spacing: 2px"
      >
        LOGIN
      </button>

      <div class="separator mt-3">or</div>

      <button class="btn btn-outline-primary w-100">Login with Google</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      passwordType: 'password',
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.payload)
    },
    showPassword () {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
    }
  }
}
</script>

<style>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
}
.separator::before {
  content: "";
  flex: 1;
  border-bottom: 1px solid #999999;
  margin-right: 1em;
}
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #999999;
  margin-left: 1em;
}
</style>
