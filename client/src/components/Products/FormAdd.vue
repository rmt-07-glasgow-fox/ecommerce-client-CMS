<template>
  <div>
    <form @submit.prevent="addProducts" class="row g-3">
      <div class="col-md-6">
        <input v-model="products.name" type="text" class="form-control" placeholder="Name">
      </div>
      <div class="col-md-4">
        <input v-model="products.price" type="number" class="form-control" placeholder="Price">
      </div>
      <div class="col-md-2">
        <input v-model="products.stock" type="number" class="form-control" placeholder="Stock">
      </div>
      <div class="col-12">
        <input v-model="products.imageUrl" type="text" class="form-control" placeholder="Image Url">
      </div>
      <div class="col-md-12">
        <textarea v-model="products.description" class="form-control" placeholder="Description"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-primary">Add</button>
        <button @click="cancel" class="btn btn-outline-secondary mx-2">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormAdd',
  props: ['isAdd'],
  data () {
    return {
      products: {
        name: '',
        price: '',
        stock: '',
        imageUrl: '',
        description: ''
      }
    }
  },
  methods: {
    cancel () {
      this.isAdd = false
    },
    addProducts () {
      console.log(this.products)
    }
  }
}
</script>

<style>

</style>
