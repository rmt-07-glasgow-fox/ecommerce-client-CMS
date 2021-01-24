<template>
<div>
  <b-navbar variant="warning">
    <b-navbar-brand class="text-dark" href="#">CMS App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-nav class="ml-auto">
      <b-button @click="logout" variant="dark">Logout</b-button>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
