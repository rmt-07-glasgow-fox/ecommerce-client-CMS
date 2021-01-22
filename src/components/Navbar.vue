<template>
  <div id="nav" class="navbar fixed-top">
      <div class="container-fluid">
        <div id="content">
        <router-link to="/">Home</router-link> |
        <router-link to="/product">Product</router-link>
        </div>
        <div id="logout">
        <!-- <router-link to="">Log Out</router-link> -->
        <a href="#" @click.prevent="logout">Log Out</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
