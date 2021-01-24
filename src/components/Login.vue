<template>
  <div class="login">
    <h1>Add new Product</h1>
    <div class="container justify-content-center p-4 shadow rounded" style="background-color: lightslategray;">
      <div class="container p-3 bg-light shadow rounded" style="max-height: 40rem; max-width: 40rem;">
        <form @submit.prevent="userLogin">
          <div class="form-floating mb-3">
            <input v-model="payload.email" type="text" class="form-control" id="email">
            <label for="email">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input v-model="payload.password" type="password" class="form-control" id="password">
            <label for="email">Password</label>
          </div>
          <div class="row">
            <button type="submit" class="btn btn-primary col m-1">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      this.$store.dispatch('userLogin', this.payload)
    }
  }
}
</script>

<style>

</style>
