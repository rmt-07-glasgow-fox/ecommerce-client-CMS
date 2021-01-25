<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
    fetchMaterials () {
      this.$store.dispatch('fetchMaterials')
    }
  },
  created () {
    this.fetchMaterials()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: goldenrod;
}
</style>
