<template>
    <Reveal>
      <a id="dashboard" href="#" @click.prevent="dashboardHandler">
        <span>Dashboard</span>
      </a>
      <a id="add-form-product" href="#" @click.prevent="addFormShow">
        <span>Add Product</span>
      </a>
      <br><br><br>
      <a id="logout" href="#" @click.prevent="logoutHandler">
        <span>Logout</span>
      </a>
    </Reveal>
</template>

<script>
import { Reveal } from 'vue-burger-menu'

export default {
  name: 'Navbar',
  components: {
    Reveal
  },
  methods: {
    logoutHandler () {
      localStorage.clear()
      this.$router.push('/login')
    },
    dashboardHandler () {
      this.$router.push('/dashboard')
    },
    addFormShow () {
      this.$router.push('/addProducts')
    }
  }
}
</script>

<style>

</style>
