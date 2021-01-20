<template>
  <div class="home">
    <Product/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    Product
  },
  methods: {
    findAll () {
      this.$store.dispatch('findAll')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.findAll()
  }
}
</script>
