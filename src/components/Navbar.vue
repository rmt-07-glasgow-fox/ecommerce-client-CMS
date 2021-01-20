<template>
  <div id="nav">
    <div>
      <b-button variant="link" v-b-toggle.sidebar-1>E-COMMERCE CMS</b-button>
    </div>
    <div>
      <b-button variant="link" @click="handleLogout">Logout</b-button>
    </div>
    <sidebar />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: 'Navbar',
  components: { Sidebar },
  methods: {
    handleLogout () {
      this.$store.dispatch('handleLogout', true)
    }
  }
}
</script>

<style scoped>

#nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #a6e2e2;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-child {
  margin-right: 10px;
}

button {
  color: #2c3e50;
}

</style>
