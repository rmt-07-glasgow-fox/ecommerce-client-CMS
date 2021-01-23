<template>
      <div class="card col-4 mx-auto my-2">
        <h2 class="login-text mt-4">Login</h2>
        <div class="card-body d-flex flex-row">
          <form class="col-12" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" class="form-control" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="caption">Password</label>
              <input id="caption" type="password" class="form-control" v-model="password" required />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log({ email: this.email, password: this.password })
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
