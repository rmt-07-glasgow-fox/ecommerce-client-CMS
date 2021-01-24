<template>
  <div>
       <div class="card mt-4 ml-3" style="width: 18rem;">
          <div id="container-img">
            <img class="card-img-top" style="width: 17.9rem; height: 16.1rem;" :src="Product.imageUrl">
            <div @click="editProduct" id="edit-btn">&#128393;</div>
          </div>
          <div class="card-body mx-auto">
            <h4 class="card-title"> <b>{{ Product.name }}</b> </h4>
            <p class="card-text">{{ Product.price | currency }}</p>
            <div id="card-footer" class="row mx-auto">
              <button @click="reduceStock" style="margin-right: 10px;">-</button>
              <p style="margin-left: 10px; margin-right: 20px;">{{ Product.stock }}</p>
              <button @click="addStock">+</button>
            </div>
            <p @click="confirmDeleteProduct" id="delete-btn" class="mx-auto">delete</p>
          </div>
        </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  props: ['Product'],
  methods: {
    editProduct () {
      this.$router.push({ path: '/editProduct/' + this.Product.id })
    },
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    confirmDeleteProduct () {
      Swal.fire({
        title: 'Are you want to delete this product?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduct()
          Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
          )
        }
      })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.Product.id)
    },
    addStock () {
      const payload = {
        id: this.Product.id,
        name: this.Product.name,
        price: this.Product.price,
        stock: this.Product.stock + 1,
        imageUrl: this.Product.imageUrl
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/' })
          this.$store.dispatch('fetchProduct')
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    },
    reduceStock () {
      const payload = {
        id: this.Product.id,
        name: this.Product.name,
        price: this.Product.price,
        stock: this.Product.stock - 1,
        imageUrl: this.Product.imageUrl
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/' })
          this.$store.dispatch('fetchProduct')
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    }
  }
}
</script>

<style>
  #container-img {
    position: relative;
    text-align: center;
    color: grey;
  }
  #edit-btn {
    color: white;
    width: 35px;
    background-color: black;
    border-radius: 50%;
    font-size: 25px;
    position: absolute;
    top: 5px;
    right: 5px;
    border: 0;
    cursor: pointer;
  }
  #edit-btn:hover {
    opacity: 0.8;
  }
  #delete-btn {
    width: 60px;
    margin-top:10px;
    opacity: 0.8;
    color:red;
    cursor: pointer;
  }
  #delete-btn:hover {
    opacity: 1;
    color: red;
    text-decoration: underline;
  }
</style>
