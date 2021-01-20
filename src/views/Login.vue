<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <main class="form-signin text-center">
      <form  v-on:submit.prevent='login'>
        <img class="mb-4" src="#" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" id="email" class="form-control" placeholder="Email address" required autofocus v-model="email">
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password" required v-model="password">
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
      </form>
    </main>
    </div>
    <div class="col-md-4"></div>
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
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err.data.message)
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
