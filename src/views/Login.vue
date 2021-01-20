<template>
  <div class="container centered">
    <form @submit.prevent="login" class="form card p-3">
      <div class="text-center p-2 mb-3">
        <h5>Login</h5>
      </div>
      <div class="form-group">
        <input type="text" placeholder="Email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" v-model="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('login', payload);

        this.email = '';
        this.password = '';

        this.$router.replace('/');
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
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
