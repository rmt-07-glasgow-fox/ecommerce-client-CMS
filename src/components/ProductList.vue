<template>
  <tr scope="row">
    <td class="align-middle">#{{item.id}}</td>
    <td class="align-middle"><img class="thumbnail" :src="imgUrl"></td>
    <td class="align-middle">{{item.name}}</td>
    <td class="align-middle">{{item.category}}</td>
    <td class="align-middle">IDR {{item.price}}</td>
    <td class="align-middle">{{item.stock}}</td>
    <td class="align-middle">
      <button class="btn btn-primary col-6" @click.prevent="goTo">Edit</button><br><br>
      <button href="#" class="btn btn-secondary col-6" @click.prevent="deleteProduct">Delete</button>
    </td>
  </tr>
</template>

<script>
import swal from 'sweetalert'
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
    goTo () {
      this.$router.push('admin/products/' + this.item.id)
    },
    deleteProduct () {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this product',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            const ProductId = this.item.id
            this.$store.dispatch('deleteProduct', ProductId)
            swal('Product has been deleted', {
              icon: 'success'
            })
          }
        })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
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
  width: 150px;
  height: 150px;
}
</style>
