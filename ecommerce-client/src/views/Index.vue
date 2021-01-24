<template>
  <div id="index">
    <button class="btn btn-success" style="margin-top: 50vh" @click="goToLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
