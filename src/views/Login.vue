<template>
<div class="login">
  <Navbar/>
    <!-- <h1>Login</h1> -->

    <div class="container align-middle">
      <br><br><br><br>
      <!-- <div class="hero-body has-text-centered"> -->
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <form  @submit.prevent="login" >
            <div class="field">
              <div class="control">
                <input v-model="email" class="input is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input v-model="password" class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
              </div>
            </div>
            <br />
            <button class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'login',
  components: {
    Navbar
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
</style>
