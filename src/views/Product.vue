<template>
  <div>
    <div>
      <div class="navbar navbar-light bg-info">
        <div>
          <router-link to="/home"
          class="btn btn-outline-secondary ml-3">Home</router-link>
          <router-link to="/products"
          class="btn btn-outline-secondary ml-3">Products</router-link>
          <button
          class="btn btn-outline-secondary ml-3"
          @click.prevent="logout">Logout</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row p-4">
        <div class="col-5 card mx-5 my-5 p-5">
          <img :src="product.image_url" class="card-img-top" height="500px">
        </div>
        <div class="col-5 card my-5 p-5">
          <div class="row justify-content-center">
            <router-link :to="`/products/${product.id}`"
            class="btn btn-primary mr-1">Detail Product</router-link>
            <router-link :to="`/products/${product.id}/edit`"
            class="btn btn-success mr-1">Edit Product</router-link>
            <router-link :to="`/products/${product.id}/delete`"
            class="btn btn-danger">Delete Product</router-link>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Product',
  created () {
    const { id } = this.$route.params
    this.$store.dispatch('showOne', id)
  },
  methods: {
    logout () {
      this.$router.push('/')
      this.$store.commit('successLogout')
    }
  },
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style scoped>

.card {
  border-radius: 30px;
}

</style>
