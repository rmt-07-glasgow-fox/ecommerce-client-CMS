<template>
  <div id="app">
    <router-view class="ml-auto"
    ></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    checkAuth () {
      if (localStorage.access_token) {
        this.$store.dispatch('getProducts').catch(err => {
          this.$swal({
            icon: 'Warning',
            text: err.response.data.message
          })
        })
        this.$store.dispatch('getCategories').catch(err => {
          this.$swal({
            icon: 'Warning',
            text: err.response.data.message
          })
        })
        this.$store.dispatch('getBanners').catch(err => {
          this.$swal({
            icon: 'Warning',
            text: err.response.data.message
          })
        })
      }
    }
  },
  created () {
    this.checkAuth()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
