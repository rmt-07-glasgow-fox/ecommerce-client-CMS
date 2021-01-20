<template>
  <div class="container centered">
    <form class="form card p-3">
      <div class="text-center p-2 mb-3">
        <h5>Login</h5>
      </div>
      <div class="form-group">
        <input type="text" placeholder="Email" id="login" class="form-control" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" id="pass" class="form-control" />
      </div>
      <button type="submit" @click="toDashboard" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    toDashboard() {
      this.$router.push('Dashboard');
    },
  },
};
</script>

<style scoped>
.centered {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  min-width: 200px;
  max-width: 400px;
  padding: 40px;
}
</style>
