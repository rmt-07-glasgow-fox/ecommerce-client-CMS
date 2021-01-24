<template>
  <div class="container-fluid">
    <navbar></navbar>

    <div class="addPage container-fluid d-flex flex-wrap">
      <AddForm/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AddForm from '@/components/AddForm.vue'

export default {
  name: 'AddPage',
  components: {
    Navbar,
    AddForm
  },
  methods: {
    allProducts () {
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.allProducts()
  }
}
</script>

<style scoped>
.addPage{
  margin-top: 80px;
}
</style>
