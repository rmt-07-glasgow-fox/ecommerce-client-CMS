<template>
  <nav class="navbar navbar-light bg-dark fixed-top w-100">
    <div class="container-fluid">
      <div :class="{sidebaractive:sidebar}">
        <i class="bi-toggles text-light mr-3" @click="sidebarToggle" v-if="pageTitle !== 'login'"></i>
        <a class="navbar-brand text-light">Admin Page</a>
      </div>
      <div class="d-flex">
        <button class="btn btn-danger" v-if="pageTitle !== 'login'" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState([
      'sidebar',
      'pageTitle'
    ])
  },
  methods: {
    sidebarToggle () {
      this.$store.dispatch('toggleSidebar')
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  nav{
    width: 100% !important;
  }
  i:hover{
    cursor: pointer;
  }
</style>
