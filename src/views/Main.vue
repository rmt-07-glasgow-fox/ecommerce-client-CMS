<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <!-- Dashboard / Main page -->
    <div style="text-align: center;">
      <h4>List Products</h4>
    </div>
    <div class="container">
    <div class="row">
      <Card
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Footer from '../components/Footer.vue'

export default {
  name: 'Dashboard',
  components: {
    Card,
    Navbar,
    Footer
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>

<style>
h4 {
  /* margin-left: 10px; */
  padding: 10px;
  font-weight: bold;
}
</style>
