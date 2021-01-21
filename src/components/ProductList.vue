<template>
  <tr>
    <td scope="row">{{item.id}}</td>
    <td><img class="thumbnail" :src="imgUrl"></td>
    <td>{{item.name}}</td>
    <td>{{item.category}}</td>
    <td>{{item.price}}</td>
    <td>{{item.stock}}</td>
    <td>
      <button class="btn btn-primary" @click.prevent="goTo">Edit</button><br><br>
      <button class="btn btn-secondary" @click="deleteProduct">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductList',
  data () {
    return {
      imgUrl: this.item.image_url
    }
  },
  props: [
    'item'
  ],
  methods: {
    fetchOneProduct () {
      const ProductId = this.$route.params.ProductId
      this.$store.dispatch('fetchOneProduct', ProductId)
    },
    goTo () {
      this.$router.push('admin/products/' + this.item.id)
    },
    deleteProduct () {
      const ProductId = this.item.id
      this.$store.dispatch('delete', ProductId)
    }
  },
  created () {
    this.fetchOneProduct()
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style>
.thumbnail {
  width: 100px;
  height: 100px;
}
</style>
