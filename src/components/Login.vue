<template>
  <div>
      <h1>Its mee!!</h1>
      <form class="container">
        <div style="margin: 30px 350px 30px 350px">
          <div>
              <label>Email</label>
              <input
              type="email"
              class="form-control"
              placeholder="Enter your email.."
              required
              />
          </div>
          <div>
              <label>Password</label>
              <input
              type="password"
              class="form-control"
              placeholder="Your password.."
              required
              />
          </div>
          <button style="margin: 10px 10px" class="btn btn-success">Login</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

</style>
