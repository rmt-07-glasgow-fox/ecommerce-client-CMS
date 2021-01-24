<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <!-- Edit Products -->
    <div
      class="container"
      style="display: flex; flex-direction: column; height: 100vh; width: 50vw; justify-content: center; align-item:center; ">
        <h3 style="font-weight:bold; text-align:center;">Edit Product</h3>
    <form>
      <p style="color: red;">{{errHandler}}</p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style="font-weight:bold;">Name :</label>
    <input
      type="text"
      class="form-control"
      v-model="getEdit.name"
      id="exampleInputEmail1"
      aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight:bold;">Image Url :</label>
    <input
      type="text"
      class="form-control"
      v-model="getEdit.image_url"
      id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight:bold;">Price :</label>
    <input
      type="text"
      class="form-control"
      v-model="getEdit.price"
      id="exampleInputPassword2">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight:bold;">Stock :</label>
    <input
      type="text"
      class="form-control"
      v-model="getEdit.stock"
      id="exampleInputPassword3">
  </div>
  <div style="text-align: center;">
  <button
    type="submit"
    class="btn btn-primary"
    style="font-weight: bold;"
    @click.prevent="edit(getEdit.id)">
    Edit
  </button>
  </div>
</form>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

import Navbar from '../components/Navbar'
export default {
  name: 'Edit',
  components: {
    Navbar,
    Footer
  },
  methods: {
    edit (id) {
      this.$store.dispatch('editProd', id)
    }
  },
  computed: {
    errHandler () {
      return this.$store.state.loginErr
    },
    getEdit () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
