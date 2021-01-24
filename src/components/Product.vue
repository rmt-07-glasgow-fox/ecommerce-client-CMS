<template>
  <div class="d-flex flex-row">
    <div class="product col-3 mt-3 mb-3">
      <div class="card" style="width: 18rem; height: 30rem;">
        <img :src="product.image_url" class="card-img-top">
        <div class="card-body mt-3 mb-0">
          <p class="card-title">{{ product.name }}</p>
        </div>
        <div class="card-body">
          <p class="card-text">Rp {{ product.price }}</p>
        </div>
        <div class="card-body">
          <p class="card-text">{{ product.stock }} left</p>
        </div>
        <div class="card-footer d-flex justify-content-around">
          <a href=""><i class="bi bi-pencil-square" id="pencil" @click.prevent="edit"></i></a>
          <a href=""><i class="bi bi-trash" id="trash" @click.prevent="deleteProduct(product.id)"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Product',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteCurrentData', id)
          Swal.fire(
            'Deleted!',
            'Successfully Update Product.',
            'success'
          )
        }
      })
    },
    allProducts () {
      this.$store.dispatch('fetchProduct')
    },
    edit () {
      this.$router.push(`/products/${this.product.id}/edit`)
    }
  },
  created () {
    this.allProducts()
  }
}
</script>

<style scoped>
.product{
  margin-top: 80px;
}
a {
  color: black;
}
p {
  margin: 0;
  padding: 0;
}
.card-body {
  padding: 0;
}
</style>
