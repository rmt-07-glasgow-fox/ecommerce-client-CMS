<template>
  <div id="nav" class="navbar fixed-top">
      <div class="container-fluid">
        <div id="left">
          <a v-if="$route.path === '/login'">E-Commerse CMS</a>
          <router-link to="/" v-if="$route.path !== '/login'">Home</router-link>
        </div>
        <div id="right">
          <a href="#" @click.prevent="add" v-if="$route.path === '/' && $route.path !== '/login'">Add Product</a>
          <a href="#" @click.prevent="logout" v-if="$route.path !== '/login'">Log Out</a>
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
    },
    add () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.664);
}

#left a {
  font-weight: bold;
  color: #000000;
  margin-right: 20px;
  margin-left: 20px;
  text-decoration: none;
}

#right a {
  font-weight: bold;
  color: #000000;
  margin-right: 20px;
  margin-left: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #00ff8c;
}
</style>
