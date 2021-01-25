<template>
  <div class="login-form">
      <form>
        <div class="form-title">
          <h3>Sign In Your Account</h3>
        </div>
        <div class="form-icon">
          <span><i class="icon icon-user"></i></span>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control item"
            id="email"
            v-model="user.email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control item"
            id="password"
            v-model="user.password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button
            type="button"
            class="btn btn-block btn-primary create-account"
            @click.prevent="login()"
            id="sign-in"
          >
            SIGN IN
          </button>
        </div>
        <router-link to="/" class="back-home">Back To Home</router-link>
      </form>
      <div class="social-media">
        <h5>Sign up with social media</h5>
        <div class="social-icons">
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
          <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
          <a href="#"><i class="icon-social-google" title="Google"></i></a>
          <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
        </div>
      </div>
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
  methods: {
    login () {
      const payload = this.user
      this.$store.dispatch('login', payload)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
}
</script>

<style scoped>
.login-form{
  padding-top: 10px;
  height: 100vh;
}

.login-form form{
    background-color: black;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.form-title{
    color: white;
    text-align: center;
    margin-bottom: 20px;
}

.login-form .form-icon{
  text-align: center;
    background-color: goldenrod;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.login-form .item{
  border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.login-form .create-account{
    background-color: goldenrod;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    color: black;
    margin-top: 20px;
}

.back-home {
  color: white;
  text-decoration: none;
  font-size: 25px;
  margin: 0 auto;
  text-align: center;
}

.login-form .social-media{
    max-width: 600px;
    background-color: black;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
    padding-bottom: 10px;
}

.login-form .social-icons{
    margin-top: 30px;
    margin-bottom: 16px;
}

.login-form .social-icons a{
    font-size: 23px;
    margin: 0 3px;
    color: #5691ff;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 45px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.login-form .social-icons a:hover{
    text-decoration: none;
    opacity: 0.6;
}

</style>
