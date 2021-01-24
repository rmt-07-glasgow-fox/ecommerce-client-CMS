<template>
<!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" type="button">
          <div class="sidebar-brand-text mx-3">Ecommerce Admin</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <router-link class="nav-item"  tag="li" :to="{ name: 'home' }" >
        <a class="nav-link" type="button">
          <i class="fas fa-fw fa-home"></i>
          <span>Dashboard</span>
        </a>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
          Master
      </div>

      <!-- Nav Item - Product -->
      <router-link class="nav-item"  tag="li" :to="{ name: 'product.data' }" >
        <a class="nav-link" type="button">
          <i class="fas fa-fw fa-home"></i>
          <span>Product</span>
        </a>
      </router-link>

      <!-- Nav Item - Category -->
      <router-link class="nav-item"  tag="li" :to="{ name: 'category.data' }" >
        <a class="nav-link" type="button">
          <i class="fas fa-fw fa-home"></i>
          <span>Category</span>
        </a>
      </router-link>

  </ul>
<!-- End of Sidebar -->
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
