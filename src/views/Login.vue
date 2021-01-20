<template>
  <div class="container">
  <form>
    <p style="color: red;">{{errLogin}}</p>
  <div class="form-group">
  <label for="exampleInputEmail1">Email address :</label>
  <input type="email" class="form-control" id="exampleInputEmail1" v-model="user.email" aria-describedby="emailHelp" placeholder="Enter email">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
  <label for="exampleInputPassword1">Password :</label>
  <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1" placeholder="Password">
  </div><br>
  <button type="submit" @click.prevent="login" class="btn btn-primary">Login</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  props: ['errLogin'],
  methods: {
    login () {
      this.$emit('login', this.user)
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vh;
  justify-content: center;
  align-content: center;
}
</style>
