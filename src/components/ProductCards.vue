<template>
  <div class="card m-2 col-2" style="width: 12rem;">
    <img class="card-img-top" :src="product.image_url" alt="Card image cap" width="150" height="150">
    <div class="card-body">
      <!-- DISPLAY FORM -->
      <div v-if="isEdit === false">
        <h3>{{product.name}}</h3>
        <p class="card-text">Rp {{product.price.toLocaleString('id-ID')}}</p>
        <p class="card-text">Stocks: {{product.stock}}</p>
        <div>
          <a href="" class="btn-sm btn-primary" @click.prevent="editForm">Edit</a>
          <a href="" class="btn-sm btn-danger" @click.prevent="deleteProduct(product.id)">Delete</a>
        </div>
      </div>
      <!-- EDIT FORM -->
      <div v-if="isEdit === true">
        <input type="text" v-model="name">
        <input type="text" v-model="image_url">
        <input type="text" v-model="price">
        <input type="text" v-model="stock">
        <div>
          <a href="" class="btn-sm btn-primary" @click.prevent="editForm(product.id)">Cancel</a>
          <a href="" class="btn-sm btn-success" @click.prevent="editProduct(product.id)">Edit</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'ProductCards',
  props: ['product'],
  data () {
    return {
      isEdit: false,
      name: this.product.name,
      image_url: this.product.image_url,
      price: this.product.price,
      stock: this.product.stock
    }
  },
  methods: {
    deleteProduct (id) {
      console.log('AXIOS: delete products with ID=' + id)
      axios({
        method: 'DELETE',
        url: '/products/' + this.product.id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          console.log('Delete product success!')
          this.$store.dispatch('fetchProducts')
        })
        .catch((err) => {
          console.log('Error message:', err.response.data.message)
        })
    },
    editProduct (id) {
      console.log('AXIOS: update products with ID=' + id)
      axios({
        method: 'PUT',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        }
      })
        .then((response) => {
          console.log(response.data.message)
          this.$store.dispatch('fetchProducts')
        })
        .catch((err) => {
          console.log('Error message:' + err.response.data.message)
        })
    },
    editForm (id) {
      if (this.isEdit === true) {
        this.isEdit = false
      } else {
        this.isEdit = true
      }
    }
  }
}
</script>

<style>

</style>
