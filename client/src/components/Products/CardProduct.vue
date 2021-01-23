<template>
  <div>
    <div v-if="!isEdit && product">
      <img class="image-object" :src="product.image_url" alt="Product image">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p>Category: {{ product.Category.name }}</p>
        <p>Price: {{ priceFormat }}</p>
        <p>Stock: {{ product.stock }}</p>
        <button @click="getProductId(product.id)" class="btn btn-outline-primary">Edit</button>
        <button @click="deleteProduct(product.id)" class="btn btn-outline-danger mx-2">Delete</button>
      </div>
    </div>
    <FormEdit
      v-if="isEdit"
      @closeEdit="closeEdit"
    ></FormEdit>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormEdit from './FormEdit'

export default {
  name: 'CardProduct',
  components: {
    FormEdit
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    closeEdit () {
      this.isEdit = false
    },
    getProductId (id) {
      this.isEdit = true
      this.$store.dispatch('getProductId', id)
    },
    deleteProduct (id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You wont be able to revert this product!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteProduct', id)
        }
      })
    }
  },
  computed: {
    ...mapState([
      'product'
    ]),
    priceFormat () {
      const val = (this.product.price / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' IDR'
    }
  }
}
</script>

<style scoped>
img {
  width: 18.5rem;
  height: 17rem;
}
.card-text {
  max-height: 3rem;
  overflow-y: auto;
}
.image-object {
  object-fit: cover;
}
</style>
