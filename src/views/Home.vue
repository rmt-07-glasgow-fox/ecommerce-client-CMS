<template>
  <!-- <router-link class="navbar-item" to="/add">Add</router-link>
      <router-link class="navbar-item" to="/edit">Edit</router-link> -->
<div class="home">
 <ListProduct/>
</div>
</template>

<script>
import ListProduct from '../components/ListProduct'

export default {
  name: 'Home',
  components: {
    ListProduct
  }
}
</script>

<style>

</style>
