<template>
  <div>
    <form @submit.prevent="addProduct" class="row g-3">
      <div class="col-md-6">
        <input v-model="product.name" type="text" class="form-control" placeholder="Name">
      </div>
      <div class="col-md-4">
        <input v-model="product.price" type="number" class="form-control" placeholder="Price">
      </div>
      <div class="col-md-2">
        <input v-model="product.stock" type="number" class="form-control" placeholder="Stock">
      </div>
      <div class="col-12">
        <input v-model="product.image_url" type="text" class="form-control" placeholder="Image Url">
      </div>
      <div class="col-md-12">
        <textarea v-model="product.description" class="form-control" placeholder="Description"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-primary">Add</button>
        <button @click="closeAdd" class="btn btn-outline-secondary mx-2">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormAdd',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    closeAdd () {
      this.$emit('closeAdd')
    },
    addProduct () {
      this.closeAdd()
      this.$store.dispatch('addProduct', this.product)
    }
  }
}
</script>

<style>

</style>
