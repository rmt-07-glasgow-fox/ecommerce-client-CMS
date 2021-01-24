<template>
  <div class="row">
    <div class="card m-1 bg-light shadow" style="width: 16rem;" v-for="product in products" :key="product.id">
      <img :src="product.image_url" class="card-img-top" :alt="product.name" height="225px">
      <div class="card-body p-3">
        <h5 class="card-title text-center font-weight-bold">{{ product.name }}</h5>
        <p class="card-text mt-4 ml-2">Price: Rp. {{ product.price }}</p>
        <p class="card-text ml-2">Stock: {{ product.stock }}</p>
        <div class="text-center">
          <a href="#" class="btn btn-primary text-center" @click.prevent="details(product.id)">View Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductsCard.vue',
  methods: {
    details (id) {
      if (localStorage.role === 'admin') {
        this.$router.push(`/products/${id}`)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You do not have access'
        })
      }
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
