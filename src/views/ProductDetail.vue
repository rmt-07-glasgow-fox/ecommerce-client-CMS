<template>
  <div class="container my-5">
    <div class='row justify-content-center align-items-center'>
      <div class='col-sm-6'>
        <div class='card'>
          <div class="wrapper">
            <img :src="`${product[0].image_url}`" class="card-img-top img-fluid" alt="image not found">
            <button type="button" class="btn-close btn-close-white" aria-label='close' @click='closeCard'></button>
          </div>
          <div class='card-header'>
            <p class='text-weight-bold'>{{ product[0].name }}</p>
          </div>
          <div class="card-body">
            <p class="card-text">Stock: {{ product[0].stock }}</p>
            <p class="card-text">Price: {{ product[0].price }}</p>
          </div>
          <div class='card-footer'>
            <i class="fas fa-edit" @click='editProductForm(product[0].id)'></i>
          </div>
        </div>
      </div>
      <div class='col-sm-6'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  methods: {
    fetchProductDetail () {
      const { id } = this.$route.params
      this.$store.dispatch('fetchProductDetail', id)
    },
    editProductForm (id) {
      if (this.$route.path !== '/products/' + id + '/edit') {
        this.$router.push('/products/' + id + '/edit')
      } else {
        this.$router.push('/products/' + id)
      }
    },
    closeCard () {
      this.$router.push('/dashboard')
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.fetchProductDetail()
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
}

.wrapper:after {
  content: '';
  display: block;
  padding-top: 100%;
}

.wrapper img {
  width: auto;
  height: 100%;
  max-width: none;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.wrapper .btn-close {
  position: absolute;
  top: 4%;
  transform: translate(-50%, 0%);
  left: 98%;
  transform: translate(-100%, -50%);
}
</style>
