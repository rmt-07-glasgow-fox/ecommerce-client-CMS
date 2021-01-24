<template>
  <div>
      <form>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input v-model="product.stock" type="number" class="form-control" id="stock">
        </div>
          <button v-on:click.prevent="addstock" type="submit" class="btn btn-primary">Edit Product</button>
          <router-link :to="`/productdetail/${product.id}`" class="btn btn-outline-primary">Cancel</router-link>
      </form>
  </div>
</template>

<script>
export default {
  name: 'AddStock',
  props: ['product'],
  methods: {
    addstock () {
      const product = {
        id: this.product.id,
        stock: this.product.stock
      }
      this.$store.dispatch('addstock', product)
    }
  }
}
</script>

<style>

</style>
