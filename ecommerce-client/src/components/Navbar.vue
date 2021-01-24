<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: grey;">
        <div class="container">
            <a class="navbar-brand" href="#" style="margin-left: 15px;">E-Commerce</a>
        </div>
        <button type="button" class="btn btn-primary" style="width: 150px; margin-right: 10px;" @click="addProduct">New Product</button>
        <button type="button" class="btn btn-danger" style="margin-right: 30px;" @click="logout">Logout</button>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    addProduct () {
      this.$router.push('/addProduct')
    }
  }
}
</script>

<style>

</style>
