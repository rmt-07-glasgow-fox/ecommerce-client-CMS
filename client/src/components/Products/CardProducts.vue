<template>
  <div>
    <div v-if="!isEdit && product">
      <img :src="product.image_url" alt="Product image">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p>Price: IDR {{ product.price }}</p>
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
import FormEdit from './FormEdit'
export default {
  name: 'CardProducts',
  components: {
    FormEdit
  },
  props: ['product'],
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
      this.$store.dispatch('deleteProduct', id)
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
</style>
