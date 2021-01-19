<template>
  <login-form @handleLogin="handleLogin"/>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  name: 'Auth',
  components: { LoginForm },
  methods: {
    handleLogin (payload) {
      this.$emit('loginData', payload)
    }
  }
}
</script>

<style>

</style>
