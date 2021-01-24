<template>
  <div id="nav">
    <h3>Welcome, {{ username }}!</h3>
    <button class='btn btn-sm btn-outline-danger' @click='logout'>Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    }
  }
}
</script>
