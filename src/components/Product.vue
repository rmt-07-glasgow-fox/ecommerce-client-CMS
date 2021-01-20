<template>

  <tr>
    <th scope="row">{{ index+1 }}</th>
    <td>{{ product.image_url }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <button v-on:click="onEdit(product.id)" class="btn btn-primary">Edit</button>
    <button v-on:click="onDelete(product.id)" class="btn btn-primary">Delete</button>
  </tr>

</template>

<script>
import axios from '../api/axios'
export default {
  name: 'Product',
  props: ['product', 'index'],
  methods: {
    onEdit (id) {
      this.$router.push('/products/' + id + '/edit')
    },
    onDelete (id) {
      axios({
        method: 'delete',
        url: 'products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          // this.$router.push('/home')
          this.$emit('fetchProducts')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {

  }

}
</script>

<style>

</style>
