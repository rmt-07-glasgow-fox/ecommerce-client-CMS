<template>
<div class="row">
  <div style="margin-bottom:1%">
        <label for="category">Filter products by category...</label>
          <select class="form-control" id="category" v-model="category">
            <option value="all">all</option>
            <option value="Makeup">Makeup</option>
            <option value="Skincare">Skincare</option>
            <option value="Haircare">Haircare</option>
          </select>
      </div>
  <div class="bg-white rounded container m-10" style=" width:100%; overflow-y: scroll; height:80vh;">
    <div class="row">
    <div class="card" style="width: 14rem;" v-for="product in products" :key="product.id">
          <img :src="product.imageUrl" class="card-img-top" alt="..." style="height:14rem">
          <div class="card-body" style="height:5rem">
            <h6 class="card-title">{{ product.name }}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border-0">category: {{ product.category }}</li>
            <li class="list-group-item border-0">price: $ {{ product.price }}</li>
            <li class="list-group-item border-0">stock: {{ product.stock }}</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-sm btn-link" @click="goToEdit(product.id)"> Edit</button>
            <button class="btn btn-sm btn-link" @click="deleteProduct(product.id)"> Delete</button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListProducts',
  data () {
    return {
      category: ''
    }
  },
  watch: {
    category (value) {
      this.$store.commit('filterCategory', value)
    }
  },
  methods: {
    goToEdit (id) {
      this.$router.push(`/products/${id}/edit`)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.getters.filterCategory
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
