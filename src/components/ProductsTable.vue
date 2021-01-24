<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Image Url</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(product, i) in products"
        :key="product.id"
      >
        <th scope="row">{{ i+1 }}</th>
        <td><img :src="product.image_url" :alt="product.name" height="200px"></td>
        <td>{{ product.name }}</td>
        <td>{{ rupiahFormat(product.price) }}</td>
        <td>{{ product.stock }}</td>
        <td>
          <div class='btn-group' role='group' aria-label='Basic example'>
            <button @click.prevent="getById(product)" type='button' class='btn btn-secondary' data-toggle='modal'
            data-target='#modal-update-product'>Edit</button>
            <button @click.prevent="deleteProduct(product.id)" type='button' class='btn btn-secondary'>Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ProductsTable',
  props: ['product'],
  methods: {
    getId (productId) {
      this.$store.commit('putProductId', productId)
    },
    getById (productDetail) {
      const id = productDetail.id
      this.$store.commit('putProductId', id)
      this.$store.commit('putProductDetail', productDetail)
      this.$router.push('/editProduct/' + id)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    rupiahFormat (value) {
      return 'Rp. ' + value.toLocaleString()
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getAllProduct')
  }
}
</script>

<style>

  .table{
    background: white;
    padding: 10px;
    margin: 30px;
  }

</style>
