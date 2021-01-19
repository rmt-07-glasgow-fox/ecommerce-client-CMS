<template>
  <div>
    <Navbar
    @logout="logout"/>
    <div>
      <form>
        <h2>Edit Product</h2>
      <div>
        <label for="product-name">Name</label>
        <input type="text" v-model="product.name" id="product-name">
      </div>
      <div>
        <label for="product-image">Image URL</label>
        <input type="text" v-model="product.image_url" id="product-image">
      </div>
      <div>
        <label for="product-price">Price</label>
        <input type="number" v-model="product.price" id="product-price">
      </div>
      <div>
        <label for="product-stock">Stock</label>
        <input type="number" v-model="product.stock" id="product-stock">
      </div>
      <div class="buttons">
        <button @click.prevent="updateProduct(product.id)" type="submit">Edit</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Edit',
  props: ['product'],
  components: {
    Navbar
  },
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$emit('logout')
    },
    updateProduct (id) {
      this.$emit('updateProduct', id)
    }
  }
}
</script>
