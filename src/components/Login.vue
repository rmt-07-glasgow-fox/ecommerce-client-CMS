<template>
  <div class="card login-card">
    <div><i class="fab fa-phoenix-framework t-25"></i></div>
    <div class="login-title">Login</div>
    <form @submit.prevent="login">
      <div>
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div>
        <input type="password" v-model="password" placeholder="password">
      </div>
      <div class="d-flex justify-content-center my-3">
        <button type="submit" class="btn mx-2">Login</button>
      </div>
    </form>
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
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>

<style scoped>
  .login-card {
    height: 480px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0.2);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    color: rgba(255, 255, 255, 0.6);
  }

  .login-card input {
    width: 350px;
    background: none;
    border: 0 solid;
    border-bottom: 3px solid rgba(255, 255, 255, 0.6);
    outline: none;
    margin: 10px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2em;
  }

  .login-card button {
    margin-top: 30px;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    color: rgba(0, 0, 0, 0.5);
    font-weight: 800;
    font-size: 1em;
  }

  .login-title {
    font-weight: 1000;
    font-size: 1.8em;
    margin-bottom: 5px;
  }
  .t-25 {
    font-size: 6em;
  }
</style>
