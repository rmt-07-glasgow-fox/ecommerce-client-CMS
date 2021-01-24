<template>
  <div class="card m-2 col-6" style="width: 12rem;">
    <div class="row">
      <div><img class="m-3" :src="product.image_url" alt="Card image cap" width="150" height="150"></div>
      <div class="card-body" style="">
        <!-- DISPLAY FORM -->
        <div class="" v-if="isEdit === false">
          <h4>{{product.name}}</h4>
          <p class="card-text">Rp {{product.price.toLocaleString('id-ID')}}</p>
          <p class="card-text">Stocks: {{product.stock}}</p>
          <div>
            <a href="" class="btn-sm btn-primary" @click.prevent="editForm">Edit</a>
            <a href="" class="btn-sm btn-danger" @click.prevent="deleteProduct(product.id)">Delete</a>
          </div>
        </div>
        <!-- EDIT FORM -->
        <div v-if="isEdit === true">
          <div>
            Name:<br>
            <input type="text" v-model="name" size="50"><br>
          </div>
          <div>
            Image URL:<br>
            <input type="text" v-model="image_url" size="50"><br>
          </div>
          <div>
            Price:<br>
            <input type="text" v-model="price" size="50"><br>
          </div>
          <div>
            Stock:<br>
            <input type="text" v-model="stock" size="50"><br>
          </div>
          <div>
            <a href="" class="btn-sm btn-primary" @click.prevent="editForm(product.id)">Cancel</a>
            <a href="" class="btn-sm btn-success" @click.prevent="editProduct(product.id)">Edit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
import Swal from 'sweetalert2'

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
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.deleteProductAxios(id)
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    },
    deleteProductAxios (id) {
      axios({
        method: 'DELETE',
        url: '/products/' + this.product.id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          this.$store.dispatch('fetchProducts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Cannot delete!',
            text: err.response.data.message
          })
        })
    },
    editProduct (id) {
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
          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success'
          })
          this.isEdit = false
          this.$store.dispatch('fetchProducts')
        })
        .catch((err) => {
          console.log('Error message:' + err.response.data.message)
          Swal.fire({
            icon: 'error',
            title: 'Cannot update!',
            text: err.response.data.message
          })
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
