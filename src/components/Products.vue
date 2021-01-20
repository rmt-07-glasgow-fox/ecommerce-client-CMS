<template>
<b-container>
  <b-row>
    <b-col>
      <div class="card bg-dark shadow mb-4 vh-100">
        <div class="card-header py-3">
          <a class="btn btn-warning"><font-awesome-icon icon="plus-circle" />  Add Product</a>
        </div>
        <div class="card-body">
           <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
            <!-- <table class="table table-striped table-dark" id="my-table">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Image</th>
              </tr>
              <tr v-for="product in getAllProducts" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.stock }}</td>
                <td><img class="img-thumbnail" width="100px" :src="product.image"></td>
              </tr>
            </table> -->
            <!-- <b-table id="my-table" dark striped hover :items="getAllProducts"></b-table> -->
            <b-table
              text-center
              dark striped
              id="my-table"
              :items="getAllProducts"
              :per-page="perPage"
              :current-page="currentPage"
              :fields="fields"
            >
              <template #cell(image)="data">
                <img width="150px" :src="data.item.image">
              </template>
            </b-table>
          </div>
        </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  data () {
    return {
      items: this.getAllProducts,
      perPage: 10,
      currentPage: 1,
      fields: [
        'id',
        'name',
        'price',
        'stock',
        'image'
      ]
    }
  },
  computed: {
    getAllProducts () {
      return this.$store.state.products
    },
    rows () {
      return this.getAllProducts.length
    }
  },
  methods: {
    fetchAllProducts () {
      this.$store.dispatch('getAllProducts')
    }
  },
  created () {
    this.fetchAllProducts()
  }
}
</script>

<style>

</style>
