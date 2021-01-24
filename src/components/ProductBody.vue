<template>
  <div class="col-lg-3 mt-3">
    <div class="card" style="border-radius: 10px;">
      <img class="card-img-top" style="border-radius: 10px 10px 0px 0px; height: 300px" :src="product.image_url">
      <div class="card-body">
        <h4 class="card-title">
          {{ product.name }}
        </h4>
        <h5>Rp. {{ product.price.toLocaleString() }}</h5>
        <h5>Stock: {{ product.stock }}</h5>
      </div>
      <div class="card-footer">
        <button @click.prevent="goToEdit" class="btn btn-primary" style="width: 100px; border-radius: 10px;">Edit</button>
        <button @click.prevent="goDelete" class="btn btn-danger ml-2" style="width: 100px; border-radius: 10px">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductBody',
  props: ['product'],
  methods: {
    goToEdit () {
      this.$router.push('/editProduct/' + this.product.id)
    },
    goDelete () {
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
          this.$store.dispatch('deleteProduct', this.product.id)
            .then(data => {
              this.$store.dispatch('fetchData')
            })
            .catch(err => {
              console.log(err)
            })
          Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
          )
        }
      })
    }
  }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.btn-danger{
  color:#fff;
  background-color:#c70039;
  border-color: white;
}

.btn-primary{
  color:#fff;
  background-color:#111d5e;
  border-color: white;
}
</style>
