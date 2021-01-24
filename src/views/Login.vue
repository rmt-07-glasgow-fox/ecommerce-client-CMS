<template>
<div class="col-12 com-sm-6 col-md-3">
        <div class="form-container">
            <form  @submit.prevent="login">
                <h4 class="text-center">Login</h4>
                <hr>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="text"
                    placeholder="e.g. email@gmail.com"
                    class="form-control"
                    v-model="email_input"
                    >
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password"
                    placeholder="*******"
                    class="form-control"
                    v-model="password_input"
                    >
                </div>
                    <button type="submit" class="btn btn-warning form-control">Submit</button>
            </form>
                <p class="pt-2 text-center">Don't have an account <a href="" @click.prevent="goToRegister">register</a></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email_input: '',
      password_input: ''
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/register')
    },
    login () {
      const payload = {
        email: this.email_input,
        password: this.password_input
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>
</style>
