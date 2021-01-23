<template>
  <div>
    <!-- Logo -->
    <div id="logo" class="row p-3 mx-auto"
       v-b-toggle.sidebar-1>
      <div class="mx-auto">
        <img src="../assets/img/shops.png" width="70" alt="">
      </div>

      <div class="p-2 mx-auto">
        <span><strong style="color: white">MyShopp</strong></span>
      </div>
    </div>

    <div>
      <b-sidebar id="sidebar-1" title="Menu" shadow
          backdrop-varian="white" backdrop :no-close-on-backdrop="true">
        <div class="px-3 py-2">
          <!-- Dashboard Router -->
          <router-link id="dashboard"
            class="row p-3 font-weight-bold"
            :to="'/dashboard'" >
            <i class="dashboard fas fa-store"></i>
            <span>Dashboard</span>
          </router-link>

          <!-- Product Router -->
          <router-link id="products"
            class="row p-3 font-weight-bold"
            :to="'/products'">
            <i class="shopping-bag fas fa-shopping-bag"></i>
            <span>Products</span>
          </router-link>

          <!-- Banner Router -->
          <router-link id="banner"
            class="row p-3 font-weight-bold"
            :to="'/banners'" >
            <i class="banner far fa-images"></i>
            <span>Banner</span>
          </router-link>

          <!-- Logout Button -->
          <div id="logout"
            class="row p-3 font-weight-bold"
            @click.prevent="isLoggedOut">
            <i class="logout fas fa-power-off"></i>
            <span>Logout</span>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    isLoggedOut () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  /* #navbar {
    background-color: darkslategrey;
    color: white;
  } */
  #dashboard,
  #products,
  #banner,
  #logout {
    cursor: pointer;
  }

  #dashboard:hover,
  #products:hover,
  #banner:hover,
  #logout:hover {
    background-color: rgb(119, 119, 119);
  }

  i {
    font-size: 22px;
    color: black;
  }

  .dashboard {
    margin-right: 12px;
  }

  .shopping-bag {
    font-size: 24px;
    margin-right: 18px;
  }

  .banner {
    margin-right: 15px;
  }

  .logout {
    margin-right: 17px;
  }

  a {
    text-decoration: none !important;
  }

  span {
    color: black
  }
</style>
