<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Commerce</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-if="$route.name === 'Add'|| $route.name == 'Edit'|| $route.name == 'Banner'|| $route.name == 'AddBanner'|| $route.name == 'EditBanner'" @click.prevent="list" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="$route.name === 'Add'|| $route.name == 'Edit'|| $route.name == 'Dashboard'|| $route.name == 'AddBanner'|| $route.name == 'EditBanner'" @click.prevent="banner" href="#">Banner</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="$route.name === 'Dashboard'|| $route.name == 'Edit'" @click.prevent="add" href="#">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="$route.name === 'Banner'|| $route.name == 'EditBanner'" @click.prevent="addBanner" href="#">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    add () {
      this.$router.push('/products/add')
    },
    list () {
      this.$router.push('/products')
    },
    banner () {
      this.$router.push('/banners')
    },
    addBanner () {
      this.$router.push('/banners/add')
    }
  }
}
</script>

<style>

</style>
