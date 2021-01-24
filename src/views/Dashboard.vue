<template>
      <div class="Dasboard">
        <div class="container">
          <div class="row d-flex justify-content-start m-5">
            <product-card
            v-for="product in products"
            :key="product.id"
            :product="product"
            ></product-card>
          </div>
        </div>
      </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.payload)
    },
    hideModal () {
      this.$refs['add-modal'].hide()
    }
  },
  components: {
    ProductCard
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  created () {
    this.$store.dispatch('getProducts')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }

}
</script>

<style scoped>

</style>
