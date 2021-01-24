<template>
<div class="dashboard">
 <Navbar/>

 <!-- <ListProduct/> -->
 <!-- <EditProduct/> -->
 <!-- <AddProduct/> -->
  <!-- <img :src="poster" alt=""> -->
  <!-- <img src="../assets/logo.png" alt=""> -->

<div class="container">
  <div class="columns">
   <!-- sidebar -->
   <Sidebar/>
    <div class="column">
      <div class="table-container">
   <router-view/>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '../components/Sidebar'
// import ListProduct from '@/components/ListProduct'
// import AddProduct from '../components/AddProduct'
// import EditProduct from '../components/EditProduct'
export default {
  name: 'Dashboard',
  // created () {
  //   this.$store.dispatch('fetch')
  // },
  // data () {
  //   return {
  //     poster: '@/assets/logo.png'
  //   }
  // },
  components: {
    Navbar,
    Sidebar
    // ListProduct
    // AddProduct,
    // EditProduct
  }
}
</script>

<style>

</style>
