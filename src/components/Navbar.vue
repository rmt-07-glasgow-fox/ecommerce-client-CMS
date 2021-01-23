<template>
<div>
  <b-navbar variant="primary">
    <b-navbar-brand class="text-white" href="#">CMS App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-nav class="ml-auto">
      <b-button @click="logout" variant="success">Logout</b-button>
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
