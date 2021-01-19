<template>
  <div>
    <FormLogin
      :user="user"
      @handleLogin="handleLogin"
    />
  </div>
</template>

<script>
import FormLogin from '../components/Auth/FormLogin'
export default {
  name: 'Login',
  components: {
    FormLogin
  },
  props: ['user'],
  methods: {
    handleLogin (payload) {
      this.$emit('handleLogin', payload)
    }
  }
}
</script>

<style>

</style>
