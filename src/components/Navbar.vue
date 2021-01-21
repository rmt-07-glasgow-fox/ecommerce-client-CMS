<template>
  <b-nav tabs align="center" class="bg-secondary">
    <!-- Dashboard -->
    <b-nav-item to="/dashboard" :active='$route.name =="Dashboard"'>Dashboard
    </b-nav-item>

    <!-- Products -->
    <b-nav-item-dropdown
      :toggle-class="$route.name === 'ListProduct' || $route.name === 'AddProduct' || $route.name === 'DetailProduct' ? 'active' : ''"
      text="Product"
      right
    >
      <b-dropdown-item
      to="/products"
      :active='$route.name == "ListProduct"'>
      List Product
      </b-dropdown-item>
      <b-dropdown-item
      to="/products/add"
      :active='$route.name == "AddProduct"'
      >Add Product
      </b-dropdown-item>
    </b-nav-item-dropdown>

    <!-- Categories -->
    <b-nav-item-dropdown
      :toggle-class="$route.name === 'ListCategory' || $route.name === 'AddCategory' || $route.name === 'DetailCategory' ? 'active' : ''"
      text="Category"
      right
    >
      <b-dropdown-item to="/categories" :active='$route.name == "ListCategory"'>List Category</b-dropdown-item>
      <b-dropdown-item
      to="/categories/add"
      :active='$route.name == "AddCategory"'
      >Add Category
      </b-dropdown-item>
    </b-nav-item-dropdown>

    <!-- Banners -->
    <b-nav-item-dropdown
      :toggle-class="$route.name === 'ListBanner' || $route.name === 'AddBanner' || $route.name === 'DetailBanner' ? 'active' : ''"
      text="Banner"
      right
    >
      <b-dropdown-item to="/banners" :active='$route.name == "ListBanner"'>List Banner</b-dropdown-item>
      <b-dropdown-item
      to="/banners/add"
      :active='$route.name == "AddBanner"'
      >Add Banner
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <!-- Logout -->
    <b-nav-item-dropdown
      text="Option"
      right
    >
      <b-dropdown-item @click.prevent="logout">Logout</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style>

</style>
