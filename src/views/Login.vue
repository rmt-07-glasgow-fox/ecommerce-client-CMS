<template>
  <div class="container mt-5">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user" @submit.prevent="login">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                                v-model="data.email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                             placeholder="Password" v-model="data.password">
                                        </div>
                                        <!-- <a class="btn btn-primary btn-user btn-block"
                                        @click="login()">
                                            Login
                                        </a> -->
                                        <button class="btn btn-primary" type="submit">Login</button>
                                    </form>
                                </div>
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
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.data)
        .then(response => {
          localStorage.access_token = response.data.access_token
          this.$router.push('/product')
        })
        .catch(err => {
          console.log(err, 'gabisa login')
        })
    }
  }
}
</script>

<style>

</style>
