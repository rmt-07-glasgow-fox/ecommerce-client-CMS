<template>
  <div class="container-fluid h-100 position-absolute bg">
    <div class="logo">
      <img src="@/assets/logo2.svg" alt="">
    </div>
    <div class="login-text">
      <h1 class="text-white">Log in CMS Admin</h1>
    </div>
    <div class="form-login">
      <form action="">
        <div class="form-input">
          <input v-model="email" class="text-white form-text" type="email" placeholder="Enter email address">
        </div>
        <div class="form-input">
          <input  v-model="password" class="text-white form-text" type="password" placeholder="Enter password">
        </div>
        <div class="form-input">
          <button @click.prevent="login" class="button" type="submit" :disabled="isDisabled">Sign In</button>
        </div>
      </form>
    </div>
    <div class="container justify-content-center" v-if="loading" style="display: flex">
      <atom-spinner v-if="loading"
        :animation-duration="1000"
        :size="60"
        :color="'#ff1d5e'"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { AtomSpinner } from 'epic-spinners'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async login () {
      try {
        this.loading = true
        const payload = { email: this.email, password: this.password }
        const response = await this.$store.dispatch('login', payload)
        const accessToken = response.data.access_token
        localStorage.setItem('access_token', accessToken)
        this.successLogin()
      } catch (err) {
        this.loading = false
        if (err.response.status === 400) {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not Authorized'
          })
        }
      }
    },
    successLogin () {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        title: 'Success'
      }).then(() => {
        this.loading = false
        this.$router.push('/dashboard')
        this.clearFormLogin()
      })
    }
  },

  computed: {
    isDisabled () {
      return this.email.length === 0 || this.password.length === 0
    }
  },
  components: {
    AtomSpinner
  }
}
</script>

<style scoped>
  .bg {
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, #000 220px),url('../../src/assets/background.webp') repeat-x center -120px;
  }
  .logo {
    margin-top: 150px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    margin-left: auto;
  }
  .login-text {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 50px;
  }
  .form-login {
    display: flex;
    justify-content: center;
  }

  .form-input {
    flex-direction: row;
    margin-bottom: 20px;
  }

  .form-text {
    padding: 13px;
    width: 400px;
    height: 50px;
    border-radius: 16px;
    border: 2px solid rgba(229,238,255,0.2);
    background: transparent;
  }
  .form-text:focus {
    border-color: rgba(229,238,255,0.6);
    outline: none;
  }
  .button {
    background-color: #fff;
    padding: 13px;
    width: 400px;
    height: 50px;
    border-radius: 16px;
    border: 2px solid rgba(229,238,255,0.2);
  }
  .button:focus {
    background-color: rgba(255,255,255,0.8);
    outline: none;
  }
  .button:hover:enabled {
    transition: 0.3s;
    background-color: rgba(255,255,255,0.8);
    outline: none;
  }
  .button:disabled {
    opacity: 0.4;
    color: #a9a9a9;
    cursor: not-allowed;
  }
</style>
