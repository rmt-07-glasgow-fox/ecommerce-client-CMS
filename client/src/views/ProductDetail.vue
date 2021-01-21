<template>
  <div class="main container">
    <div class="row">
      <div class="col-5">
        <img :src="product.image_url" alt="picture">
      </div>
      <div class="detail col-3">
        <h1>{{ product.name }}</h1>
        <h2>Rp{{ product.price }}</h2>
        <h5>Stock: {{ product.stock }}</h5>
      </div>
      <div class="action col-3 border rounded row">
        <div class="col-6">
          <router-link :to="`/productdetail/${$route.params.id}/editproduct`" class="btn btn-outline-primary">Edit</router-link>
        </div>
        <div class="col-6">
          <button v-on:click="deleteProduct" class="btn btn-outline-primary">Delete</button>
        </div>
      </div>
    </div>
    <router-view :product="product"/>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'ProductDetail',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    fetchProductDetail () {
      const { id } = this.$route.params
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.product = data
        })
        .catch(err => console.log(err))
    },
    deleteProduct () {
      const { id } = this.$route.params
      this.$store.dispatch('delete', id)
    }
  },
  created () {
    this.fetchProductDetail()
  }
}
</script>

<style>
.main {
  height: 100vh;
  padding-top: 50px;
}

.detail {
  text-align: left;
  font-weight: 1000;
}

.col-5 img {
  width: 400px;
}

.action {
  align-items: center;
}
</style>
