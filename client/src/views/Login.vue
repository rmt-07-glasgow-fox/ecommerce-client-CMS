<template>
  <section id="login-page">
    <div class="center">
      <h1 style="margin-bottom: 3rem;" class="welcome">E-COMMERCE CMS</h1>
      <div class="container-fluid d-flex flex-row">
        <!-- LOGIN FORM -->
        <div id="login-form-page">
          <div class="container d-flex justify-content-center">
            <form @submit.prevent="login" style="width: 20rem;">
              <div class="mb-3">
                <h2 class="white">Sign In</h2>
              </div>
              <div class="mb-3">
                <label for="email" class="white form-label">Email address</label>
                <input v-model="newUser.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                <div id="emailHelp" class="white form-text">Whether you speak secretly or openly—He surely knows best what is ˹hidden˺ in the heart.</div>
              </div>
              <div class="mb-3">
                <label for="password" class="white form-label">Password</label>
                <input v-model="newUser.password" type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-light" id="login-btn">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from '../api/axios'

export default {
  name: 'Login',
  data () {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = this.newUser
      this.$store.dispatch('login', payload)
    }
  }
}

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.box {
  height: 550px;
}

.box1 {
  height: 100%;
  overflow: auto;
  margin-bottom: 10px;
}

.description p {
  font-size: 10px;
  margin: 0;
}

.edit {
  padding: 0.1px;
}

.fa-plus {
  font-size: 20px;
}

#login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 55%, rgba(255,255,255,1) 100%);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.welcome {
  color: white;
  text-shadow: 2px 5px 10px black;
}
.white{
  color: white;
}
</style>
