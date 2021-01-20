<template>
    <form class="mt-2 formLogin">
        <div>
            <p class="h2 text-center text-primary">MyLogin</p>
        </div>
        <div class="loginResult">
            <p class="text-center text-danger" v-text="loginFail"></p>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" v-model="user.email" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="user.password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary btn-block" v-on:click.prevent="$emit('login', user)">Login</button><br>
        <button type="button" class="btn btn-link" id="regbtn" v-on:click.prevent="$emit('changePage', 'register')">
            Don't have an account? Register here
        </button>
    </form>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  props: []
}
</script>

<style scoped>
#regbtn {
    margin-top: -15px;
    float: right;
}
</style>
