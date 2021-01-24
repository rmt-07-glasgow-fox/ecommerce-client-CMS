<template>
  <div class="container">
    <div class="col d-flex justify-content-center mt-3">
      <form @submit.prevent="loginUser">
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            placeholder="Email">
        </div>
        <div class="form-group mb-3">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser () {
      const payload = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('loginUser', payload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
