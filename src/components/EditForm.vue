<template>
  <div class="row">
    <div class="col-4 offset-4 bg-light rounded" style="margin-top: 20px; margin-bottom: 20px;padding: 30px;">
      <div class="addForm">
        <form @submit.prevent="addProduct(productDetail.id)">
          <input class="rounded" type="text" :placeholder="productDetail.name" v-model="editName"><br><br>
          <input class="rounded" type="text" :placeholder="productDetail.image_url" v-model="editImage_url"><br><br>
          <input class="rounded" type="text" :placeholder="productDetail.price" v-model="editPrice"><br><br>
          <input class="rounded" type="text" :placeholder="productDetail.stock" v-model="editStock"><br><br>
          <button class="btn btn-dark rounded" type="submit">Edit</button>
        </form>
        </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'EditForm',
  data () {
    return {
      editName: '',
      editImage_url: '',
      editPrice: '',
      editStock: ''
    }
  },
  props: ['changePage'],
  methods: {
    addProduct (id) {
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: this.editName,
          image_url: this.editImage_url,
          price: this.editPrice,
          stock: this.editStock
        }
      })
        .then(({ data }) => {
          this.changePage('productList')
          return this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    productDetail () {
      return this.$store.state.productDetail
    }
  }
}
</script>

<style>

</style>
