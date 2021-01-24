<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-sm-6 mx-auto">
        <div class='card mt-4'>
          <div class='card-header'>
            <div class='row justify-content-end'>
              <button type="button" class="btn-close" aria-label='close' @click='closeCard'></button>
            </div>
          </div>
          <div class='card-body'>
            <form class='mt-4' @submit.prevent='addProduct'>
                <h3>Add Product</h3>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Product name..." required='' v-model='name'>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Product category..." required='' v-model='category'>
                </div>
                <div class="form-group">
                  <input type='number' class="form-control" placeholder="Product price..." required='' v-model='price'>
                </div>
                <div class="form-group">
                  <label for='stock'>Number of stock: </label>
                  <input type='number' id='stock' class="form-control" required='' v-model='stock'>
                </div>
                <div class="form-group">
                  <input type='text' id='image_url' class="form-control" placeholder="Copy image url here..." required='' v-model='image_url'>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddForm',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: '',
      category: ''
    }
  },
  watch: {
    errors: function (val, oldVal) {
      if (val.length > 0) {
        this.$swal.fire({
          icon: 'error',
          title: 'Please try again',
          text: this.errors,
          footer: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400" target="_blank">400 Bad request</a>'
        })
      }
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        category: this.category
      }
      this.$swal.fire({
        title: 'Add new product?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          return this.$store.dispatch('addProduct', payload)
        } else if (result.isDenied) {
          this.$swal.fire('Add product cancelled', '', 'info')
        }
      })
        .then(({ data }) => {
          this.$swal.fire('Product added!', '', 'success')
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          this.$store.commit('catchError', err.response.data.errors)
        })
    },
    closeCard () {
      this.$router.push('/dashboard')
    }
  },
  computed: mapState(['errors'])
}
</script>

<style scoped>
.form-control {
  margin: 0 5px;
  margin: 5px 0;
}
</style>
