<template>
  <div class="form-page">
    <div class="container" id="register-page">
      <h4 class="text-center">Register</h4>
      <hr />
      <form>
        <div class="form-group">
          <label for="email-register">Email address :</label>
          <input
            type="email"
            class="form-control"
            name="email-register"
            id="email-register"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password-register">Password :</label>
          <input
            type="password"
            class="form-control"
            name="password-register"
            id="password-register"
            placeholder="Password"
            required
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary" id="register-post-btn">
            submit
        </button>
        </form>
        <button class="btn btn-primary" id="back-login-btn">
            login
        </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Registration'
}
</script>
<style scoped>
.form-page .container {
  width: 30%;
  margin-top: 5%;
  padding: 30px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
}
</style>
