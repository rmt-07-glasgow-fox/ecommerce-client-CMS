<template>
  <div class="card-body mt-5">
    <h5 class="row card-title mb-5 border p-2 rounded">Name: {{ product.name }}</h5>
    <div class="row" v-if="!update">
      <h5 class="col-8 card-title mb-5 border p-2 rounded">Stock: {{ product.stock }}</h5>
      <button class="col-4 card-title mb-5 border p-2 rounded btn btn-secondary" @click.prevent="showForm">Update Stock</button>
    </div>
    <form class="row" v-else @submit.prevent="editStock">
      <input v-model="product.stock" type="number" class="col-8 form-control" id="inputStock">
      <button class="col-4 card-title mb-5 border p-2 rounded btn btn-secondary" type="submit">Submit Stock</button>
    </form>
    <h5 class="row card-title mb-5 border p-2 rounded">Price: {{ product.price }}</h5>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductDetail',
  data () {
    return {
      update: ''
    }
  },
  methods: {
    showForm () {
      this.update = 'update'
    },
    editStock () {
      const obj = {
        id: this.product.id,
        stock: this.product.stock
      }
      this.$store.dispatch('editStock', obj)
      this.update = ''
    }
  },
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style>

</style>
