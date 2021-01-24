<template>
  <!-- LOGIN USER -->
  <div class="container cont-login" style="">
  <h3 class="card-title" style="font-weight:bold;">E-commerce CMS Application</h3>
  <form>
    <p style="color: red;">{{errHandler}}</p>
  <div class="form-group">
  <label for="exampleInputEmail1" style="font-weight:bold;">Email :</label>
  <br>
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    v-model="user.email"
    aria-describedby="emailHelp"
    placeholder="Enter email">
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
  <label for="exampleInputPassword1" style="font-weight:bold;">Password :</label>
  <br>
  <input
    type="password"
    class="form-control"
    v-model="user.password"
    id="exampleInputPassword1"
    placeholder="Password">
  </div><br>
  <div style="text-align:center; padding: 5px">
    <button
      type="submit"
      @click.prevent="login"
      class="btn btn-primary" style="font-weight:bold;">
      Login
    </button>
  </div>
  </form>
  <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
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
  components: {
    Footer
  },
  methods: {
    login () {
      this.$store.dispatch('loginUser', this.user)
    }
  },
  computed: {
    errHandler () {
      return this.$store.state.loginErr
    }
  }
}
</script>

<style>
.cont-login {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 35vw;
  justify-content: center;
  align-items:center;
}
</style>
