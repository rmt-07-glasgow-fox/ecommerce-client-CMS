<template>
  <div id="nav">
    <div>
      <router-link class="nav-child" to="/">Home</router-link>
      <router-link class="nav-child" to="/products">Products</router-link>
      <router-link class="nav-child" to="/banners">Banners</router-link>
      <router-link class="nav-child" to="/categories">Categories</router-link>
    </div>
    <div>
      <a href="#" @click="handleLogout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    handleLogout () {
      this.$emit('handleLogout', true)
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

</style>
