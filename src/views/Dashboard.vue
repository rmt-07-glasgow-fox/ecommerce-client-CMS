<template>
  <div>
    <!-- navbar -->
    <Navbar
    @logout="logout"/>
    <div> <!-- content -->
      <div>
        <h1>Tes</h1>
      </div>
      <div class="container">
        <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @populateProduct="populateProduct"
        @deleteProduct="deleteProduct"/>
      </div>
    </div> <!-- content -->
  </div>
</template>

<script>
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'

export default {
  name: 'Dashboard',
  props: ['products'],
  components: {
    Card,
    Navbar
  },
  data () {
    return {
    }
  },
  methods: {
    populateProduct (id) {
      this.$emit('populateProduct', id)
    },
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    },
    logout () {
      this.$emit('logout')
    }
  },
  created () {
    this.$emit('fetchAllProducts')
  }
}

</script>
