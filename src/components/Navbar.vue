<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Commerce</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="list" href="#">List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="add" href="#">Add</a>
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
      this.$emit('logout')
    },
    add () {
      this.$router.push('/products/add')
    },
    list () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>
