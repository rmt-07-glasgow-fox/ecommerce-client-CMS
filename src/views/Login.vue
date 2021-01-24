<template>
  <div class="row" style="margin-top:1%">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <main class="form-signin text-center">
        <img class="mb-4" src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2899&q=80" alt="" width="100%" height="100%">
      <form  v-on:submit.prevent='login'>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Email address" required autofocus v-model="email">
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password" required v-model="password"><br>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
      </form>
    </main>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
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
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire(
            'Login Success!',
            'Click OK to continue',
            'success'
          )
          this.$emit('changeNavbar', 'home')
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err.response)
        })
    }
  }

}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

</style>
