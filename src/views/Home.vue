<template>
  <div class="container">
    <h1>Ini page homw</h1>
    <form>
      <h2>Welcome</h2>
      <div>
        <button @click.prevent="toLoginPage" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    toLoginPage () {
      this.$router.push('/login')
    }
  }
}
</script>
