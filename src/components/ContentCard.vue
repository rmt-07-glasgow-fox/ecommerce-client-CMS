<template>
  <div class='container'>
    <div class='row'>
      <h1>Dashboard</h1>
    </div>
    <div class='row justify-content-end'>
      <button class="btn btn-sm btn-outline-primary mb-3" @click='toAddProductPage'>Add a product</button>
    </div>
    <div class='row'>
      <select id="inputState" class="form-control mb-4" v-model='category'>
        <option selected>Choose a category...</option>
        <option value='all'>All categories</option>
        <option v-for='(category, idx) in categories' :key='idx' :value='category'>{{ category }}</option>
      </select>
    </div>
    <div class='row'>
      <div class='col-3 pl-0 pr-0 mb-4' v-for='product in products' :key='product.id'>
        <div class='card'>
          <img :src="`${product.image_url}`" class="card-img-top img-fluid" alt="image not found" @click='productDetail(product.id)'>
          <div class='card-header'>
            <p class='text-weight-bold'>{{ product.name }}</p>
          </div>
          <div class="card-body">
            <p class="card-text">Stock: {{ product.stock }}</p>
            <p class="card-text">Price: {{ formatPrice(product.price) }}</p>
          </div>
          <div class="card-footer">
            <i class="fas fa-trash" @click='deleteProduct(product.id)'></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  data () {
    return {
      category: ''
    }
  },
  watch: {
    category (newVal) {
      this.$store.commit('changeCategory', newVal)
    }
  },
  methods: {
    formatPrice (price) {
      return 'IDR ' + price.toLocaleString('id')
    },
    productDetail (id) {
      this.$router.push({
        name: 'ProductDetail',
        params: {
          id
        }
      })
    },
    deleteProduct (id) {
      this.$swal.fire({
        title: 'Delete product?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire('Product deleted!', '', 'success')
          return this.$store.dispatch('deleteProduct', id)
        } else if (result.isDenied) {
          this.$swal.fire('No delete performed', '', 'info')
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchProducts')
        })
        .catch((err) => {
          this.$store.commit('catchError', err.response.data.errors)
        })
    },
    toAddProductPage () {
      this.$router.push('/addproduct')
    }
  },
  computed: {
    products () {
      return this.$store.getters.filterByCategory
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
.fa-trash {
  color: rgb(209,26,42);
}
</style>
