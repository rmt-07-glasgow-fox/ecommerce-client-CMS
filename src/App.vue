<template>
  <div id="app">
    <div>
      <router-view
      @login="login"
      @logout="logout"
      @addProduct="addProduct"
      @populateProduct="populateProduct"
      @updateProduct="updateProduct"
      @deleteProduct="deleteProduct"
      @fetchAllProducts="fetchAllProducts"
      :products="products"
      :product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from './api/axios'
import Swal from 'sweetalert2'

export default {
  name: 'App',
  data () {
    return {
      products: [],
      user: {
        email: '',
        password: ''
      },
      product: {
        id: '',
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {},
  methods: {
    login (user) {
      const userObj = { email: user.email, password: user.password }
      axios
        .post('/login', userObj)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push('/products')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    logout () {
      localStorage.clear()
      this.$router.push('/')
    },

    fetchAllProducts () {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products', { headers })
        .then(response => {
          this.products = response.data
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    // Notes: masih belum jalan, sequelizedatabase error. isi sudah kebaca tp belum kesimpan
    addProduct (product) {
      const headers = { access_token: localStorage.access_token }
      const newProduct = {
        name: product.name,
        image_url: product.image_url,
        price: +product.price,
        stock: +product.stock
      }
      axios
        .post('/products', newProduct, { headers })
        .then(response => {
          console.log(response.data)
          console.log('========= response data addProduct')
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err, 'ini error ===========')
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    populateProduct (id) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get(`/products/${id}`, { headers })
        .then(response => {
          this.product.id = response.data.id
          this.product.name = response.data.name
          this.product.image_url = response.data.image_url
          this.product.price = +response.data.price
          this.product.stock = +response.data.stock
          this.$router.push(`/products/${response.data.id}`)
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    updateProduct (id) {
      const headers = { access_token: localStorage.access_token }
      const updatedProduct = {
        name: this.product.name,
        image_url: this.product.image_url,
        price: +this.product.price,
        stock: +this.product.stock
      }
      axios
        .put(`/products/${id}`, updatedProduct, { headers })
        .then(response => {
          this.$router.push('/products')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    deleteProduct (id) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete(`/products/${id}`, { headers })
        .then(response => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your product has been deleted',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          this.fetchAllProducts()
          this.$router.push('/products')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    }
  }
}
</script>

<style>
</style>
