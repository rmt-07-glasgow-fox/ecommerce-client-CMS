<template>
<div class="form-signin text-center">
  <form>
    <!-- <img class="mb-4" src="" alt="" width="72" height="57"> -->
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <label for="inputEmail" class="visually-hidden">Email address</label>
    <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="login">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
  </form>
</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
// import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      // console.log(loginData)
      this.$store.dispatch('login', loginData)
      // this.$emit('login', loginData)
    }
  },
  computed: {
    ...mapState([
      'currentUser'
    ])
  }
}
</script>

<style scoped>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
