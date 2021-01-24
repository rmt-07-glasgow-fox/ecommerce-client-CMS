<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>{{ product.name }}</h1>
        <img :src="product.image_url" width="200" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'ProductEdit',
  data () {
    return {
      product: {
        name: ''
      }
    }
  },
  methods: {
    fetchProductDetail () {
      const { id } = this.$route.params

      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          this.product = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProductDetail()
  }
}
</script>

<style>

</style>
