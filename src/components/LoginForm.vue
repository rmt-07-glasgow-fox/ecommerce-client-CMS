<template>
  <div
    id="login-form"
    style="margin-left: auto; margin-right: auto; width: 320px"
  >
    <h3 class="text-center" style="font-weight: 600">Welcome back!</h3>
    <p class="text-center">Login to get going.</p>

    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1"
          >Show password</label
        >
      </div>
      <button
        type="submit"
        class="btn btn-primary w-100"
        style="font-weight: 600; letter-spacing: 2px"
        @click.prevent="login"
      >
        LOGIN
      </button>

      <div class="separator mt-3">or</div>

      <button class="btn btn-outline-primary w-100">Login with Google</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    login () {
      this.$router.push('admin')
    }
  }
}
</script>

<style>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
}
.separator::before {
  content: "";
  flex: 1;
  border-bottom: 1px solid #999999;
  margin-right: 1em;
}
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #999999;
  margin-left: 1em;
}
</style>
