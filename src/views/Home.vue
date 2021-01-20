<template>
<div class="container">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Image</th>
        <th scope="col">Description</th>
        <th scope="col">Condition</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in dataProduct" :key="index">
        <th class="align-middle">{{ index+1 }}</th>
        <td class="align-middle"><img height="150px" width="150px" :src="product.image_url" alt="sample-foto"></td>
        <td class="align-middle">{{ product.description }}</td>
        <td class="align-middle">{{ product.condition }}</td>
        <td class="align-middle">{{ product.price }}</td>
        <td class="align-middle">{{ product.stock }}</td>
        <td class="align-middle">
          <button v-on:click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
          <br><br>
          <button class="btn btn-primary">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    ...mapState(['dataProduct'])
  }
}
</script>
