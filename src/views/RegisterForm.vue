<template>
  <div class="register">
    <h1>Register to CMS</h1>
    <form class="p-4" @submit.prevent="register">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
        <div class="col-sm-7">
          <input v-model="user.email" type="email" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
        <div class="col-sm-7">
          <input v-model="user.password" type="password" class="form-control" id="inputPassword3">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputRole" class="col-sm-3 col-form-label">Role</label>
        <div class="col-sm-7">
          <input v-model="user.role" type="text" class="form-control" id="inputRole" aria-describedby="roleHelper">
        </div>
        <div id="roleHelper" class="col-auto form-text">
          Leave it empty if you are not admin.
        </div>
      </div>
      <div class="row mb-3">
        <a
        class="col-sm-5"
        @click.prevent="login">Have an account</a>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      user: {
        email: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$store.dispatch('loginUser', this.user)
      this.$router.push('/')
    }
  }
}
</script>

<style>

form {
  width: 500px;
  align-self: center;
  border: 1px lightblue solid;
  border-radius: 20px;
}

.register {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#roleHelper {
  text-align: center;
  color: gray;
  margin-left: 8em;
}

</style>
