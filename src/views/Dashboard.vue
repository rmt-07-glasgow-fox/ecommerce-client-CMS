<template>
<div class="dashboard">
 <Navbar/>
 <ListProduct/>
 <!-- <EditProduct/> -->
 <!-- <AddProduct/> -->
  <!-- <img :src="poster" alt=""> -->
  <!-- <img src="../assets/logo.png" alt=""> -->
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ListProduct from '@/components/ListProduct'
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
    ListProduct
    // AddProduct,
    // EditProduct
  }
}
</script>

<style>

</style>
