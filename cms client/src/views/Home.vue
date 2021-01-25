<template>
<div class="container">
<div class="home">
    <div class="img">
      <img alt="Vue logo" src="../assets/material-logo.jpg">
    </div>
    <div class="message">
      <h1>Find Best Material Here!</h1>
      <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto, voluptatum officia dolore ea mollitia maiores placeat libero quam ducimus, itaque, dolorem amet perferendis recusandae quasi quos hic cupiditate natus!</p>
      </div>
      <h4 class="label-login">Please Login To Access Items</h4>
      <button class="btn btn-lg btn-light" id="login-btn" @click.prevent="toLogin">LOGIN</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toLogin () {
      this.$router.push('/login')
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
#login-btn {
  color: black;
  font-size: 30px;
  margin-top: 20px;
  margin-left: 160px;
}

.label-login {
  color:white;
  text-align: center;
}

.home {
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}

.message {
  margin-left: 50px;
  color: white;
  margin-left: 100px;
}

img {
  height: 550px;
  border: 0.5px solid goldenrod;
}

.text {
  margin-top: 50px;
  display: flex;
  align-content: center;
  border: 1px solid white;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 10px;
  margin-bottom: 50px;
  color: white;
}

h1 {
  margin-top: 70px;
  color: white;
  text-align: center;
}
</style>
