<template>
  <div id="nav">
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
  }
}
</script>
