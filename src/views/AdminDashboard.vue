<template>
  <div>
    <a-d-header />

    <div class="container-fluid">
      <div class="row">
        <a-d-sidebar />

        <product />
      </div>
    </div>
  </div>
</template>

<script>
import ADHeader from '../components/C_AdminDashboard/Header.vue'
import ADSidebar from '../components/C_AdminDashboard/Sidebar.vue'
import Product from '../components/C_AdminDashboard/Product.vue'

export default {
  name: 'AdminDashboard',
  components: {
    ADHeader,
    ADSidebar,
    Product
  }
}
</script>
