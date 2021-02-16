<template>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="form-block">
                <div class="mb-4">
                  <h3>Sign In to <strong>MyShopp</strong></h3>
                  <p class="mb-4">
                    Manage your shop operations in one-site
                  </p>
                </div>
                <form @submit.prevent="isLoggedIn">
                  <div class="form-group">
                    <input type="text"
                      id="username"
                      class="form-control"
                      placeholder="Email"
                      v-model="user.email">
                  </div>
                  <div class="form-group mb-5">
                    <input type="password"
                      id="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="user.password">
                  </div>

                  <input type="submit" value="Log In"
                    class="btn text-white btn-block btn-primary">
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    isLoggedIn () {
      this.$store.dispatch('isLoggedIn', this.user)
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
p {
  color: #b3b3b3;
  font-weight: 300;
  font-size: 18px;
}

.content {
  padding: 150px 0;
  background-color: darkslategrey;
  height: 100vh;
}

h2 {
  font-size: 20px; }

.form-block {
  background: rgb(255, 255, 255);
  padding: 60px;
  box-shadow: 0 2px 3px 0 rgba(253, 252, 252, 0.1);
  border-radius: 15px;
}

.form-control {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.content .bg {
  background-size: cover;
  background-position: center;
}

.content a {
  color: #888;
  text-decoration: underline;
}

.content .btn {
  height: 54px;
  padding-left: 30px;
  padding-right: 30px; }

.btn-primary {
  border-radius: 30px;
}

input::placeholder {
  font-size: 13px;
  font-style: italic;
}
</style>
