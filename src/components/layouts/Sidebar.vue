<template>
  <div class="border-right" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom text-center">E-Commerce CMS</div>
    <div class="list-group list-group-flush border-bottom">
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'Home' }"
        ><i class="fa fa-home mr-2"></i> Home</router-link
      >
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'Banners' }"
        ><i class="fa fa-picture-o mr-2"></i> Banner</router-link
      >
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'Categories' }"
        ><i class="fa fa-folder mr-2"></i> Category</router-link
      >
      <router-link class="list-group-item list-group-item-action" :to="{ name: 'Products' }"
        ><i class="fa fa-product-hunt mr-2"></i> Product</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
