<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
    <div style="margin-left: 10px;">
      <a class="navbar-brand" >Dashboard</a>
      <a class="navbar-brand" href="#" style="margin-left: 10px;" @click.prevent="changeBody('content')">Content</a>
      <a class="navbar-brand" href="#" style="margin-left: 10px;" @click.prevent="changeBody('banner')">Banner</a>
    </div>
  <div>
    <button class = "btn btn-danger" style="margin-right: 10px" @click.prevent="logOut">Log Out</button>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logOut () {
      localStorage.clear()
      this.$router.push('/')
    },
    changeBody (value) {
      console.log('masuk changebody')
      this.$store.commit('changeBody', value)
    }
  }
}
</script>

<style>

</style>
