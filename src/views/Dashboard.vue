<template>
  <!-- <div class="row">
    <div class="col-2">
      <sidebar/>
    </div>
     <div class="col">
    </div>
  </div> -->
  <products/>
</template>

<script>
import Products from '../components/Products.vue'
// import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    // Sidebar,
    Products
  }
}
</script>

<style scoped>

</style>
