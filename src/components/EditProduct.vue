<template>
<div class="edit">
  <!-- <Navbar></Navbar> -->
  <div class="container">
    <!-- <div v-if="currentData.name" class="columns"> -->
      <div class="column"><img :src="currentData.imageUrl" alt="" srcset=""></div>
  <!-- <div class="column is-three-fifths"> -->
        <form @submit.prevent="doEdit" action="">
        <div class="field">
          <!-- <label class="label">Product Name</label> -->
          <div class="control">
            <input v-model="currentData.name" class="input" type="text">
          </div>
        </div>
        <div class="field">
          <!-- <label class="label">Image Url</label> -->
          <div class="control">
            <input  v-model="currentData.imageUrl" class="input" type="text">
          </div>
        </div>
        <div class="field">
          <!-- <label class="label">Price</label> -->
          <div class="control">
            <input v-model="currentData.price" class="input" type="text">
          </div>
        </div>
        <div class="field">
          <!-- <label class="label">Stock</label> -->
          <div class="control">
             <!-- import ListProduct from '../components/ListProduct' -->
            <input v-model="currentData.stock" class="input" type="text">
          </div>
        </div>
        <button class="button is-link">Update</button>
        </form>
<!-- </div> -->
        <div class="column"></div>
    <!-- </div> -->
    <!-- <div v-else>
        <h1>PRODUCT NOT FOUND</h1>
        <p><small>404</small></p>
        <router-link to="/" class="button is primary"> back to list</router-link>
    </div> -->
  </div>
</div>
</template>

<script>
// import Navbar from '../components/Navbar'
export default {
  name: 'EditProduct',
  methods: {
    getPopulateData () {
      const id = +this.$route.params.id
      this.$store.dispatch('findByPk', id)
    },
    doEdit () {
      this.$store.dispatch('update', this.currentData)
    }
  },
  created () {
    this.getPopulateData()
  },
  computed: {
    currentData () {
      return this.$store.state.editProduct
    }
  }
}
</script>

<style>

</style>
