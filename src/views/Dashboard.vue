<template>
  <div>
    <div class="row mx-auto">
      <div class="col-12 p-0">
        <div class="container-fullwidth">
          <navbar/>
        </div>
      </div>
       <sidebar/>
      <div class="col-10" style="background-color: rgb(217,224,231)">
        <products/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Products from '../components/Products.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Products
  }
}
</script>

<style>

</style>
