<template>
  <FormulateForm
     @submit="loginHandle"
     v-model="formData"
     class="login-form"
  >
      <h2 class="form-title">Login</h2>
      <FormulateInput
      label="Email"
      type="email"
      name="email"
      placeholder="Email"
      />
      <FormulateInput
      label="Password"
      type="password"
      name="password"
      placeholder="Password"
      />
      <FormulateInput
      type="submit"
      name="Login"
      />
  </FormulateForm>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    loginHandle () {
      const obj = {
        email: this.formData.email,
        password: this.formData.password
      }
      this.$store.dispatch('loginHandle', obj)
    }
  }
}
</script>

<style>
.login-form {
  padding: 2em;
  border: 3px solid #000000;
  background: #ffffff;
  border-radius: .5em;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
</style>
