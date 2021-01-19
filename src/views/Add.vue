<template>
  <div>
    <Navbar
    @logout="logout"/>
    <div>
      <form>
        <h2>Add Product</h2>
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
        <button @click.prevent="addProduct" type="submit">Add</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Add',
  components: {
    Navbar
  },
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    logout () {
      this.$emit('logout')
    },
    addProduct () {
      this.$emit('addProduct', this.product)
    }
  }
}
</script>
