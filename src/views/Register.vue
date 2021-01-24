<template>
  <div class="col-12 com-sm-6 col-md-3">
        <div class="form-container">
            <form  @submit.prevent="register">
                <h4 class="text-center">Register</h4>
                <hr>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="text"
                    placeholder="e.g. email@gmail.com"
                    class="form-control"
                    v-model="email_register_input"
                    >
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password"
                    placeholder="*******"
                    class="form-control"
                    v-model="password_register_input"
                    >
                </div>
                    <button type="submit" class="btn btn-warning form-control">Submit</button>
            </form>
                <p class="pt-2 text-center">Don't have an account <a href="" @click.prevent="goToLogin">register</a></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email_register_input: '',
      password_register_input: ''
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    register () {
      const payload = {
        email: this.email_register_input,
        password: this.password_register_input
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>
</style>
