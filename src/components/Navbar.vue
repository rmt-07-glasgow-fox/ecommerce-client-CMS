<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <img class="logos-ecomm" src="../../public/ecomm.png" alt="">
    <a class="navbar-brand text-light"  style="padding-left:15px" href="#">E-Commerce App</a>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link text-light"
            v-if="$route.name === 'Add'|| $route.name == 'Edit'|| $route.name == 'Banner'|| $route.name == 'AddBanner'|| $route.name == 'EditBanner'"
            @click.prevent="list"
            href="#">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-light"
            v-if="$route.name === 'Add'|| $route.name == 'Edit'|| $route.name == 'Dashboard'|| $route.name == 'AddBanner'|| $route.name == 'EditBanner'"
            @click.prevent="banner"
            href="#">
            Banner
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-light"
            v-if="$route.name === 'Dashboard'|| $route.name == 'Edit'"
            @click.prevent="add"
            href="#">
            Add
          </a>
        </li>
        <li class="nav-item">
          <a
          class="nav-link text-light"
          v-if="$route.name === 'Banner'|| $route.name == 'EditBanner'"
          @click.prevent="addBanner"
          href="#">
          Add
        </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-light"
            @click.prevent="logout"
            href="#">
            Logout
          </a>
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
a {
  /* padding-left: 15px; */
  font-weight: bold;
}

/* li {
  margin-left: 5px;
  margin-right: 5px;
} */

.navbar-collapse {
  align-items: center;
}
.logos-ecomm {
  height: 35px;
  width: 35px;
}
</style>
