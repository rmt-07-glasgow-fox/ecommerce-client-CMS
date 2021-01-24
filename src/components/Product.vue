<template>

  <tr>
    <th scope="row">{{ index+1 }}</th>
    <td><img :src="product.image_url"></td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>{{ product.category }}</td>
    <button v-on:click="onEdit(product.id)" class="btn btn-primary">Edit</button>
    <button v-on:click="onDelete(product.id)" class="btn btn-primary">Delete</button>
  </tr>

</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'index'],
  methods: {
    onEdit (id) {
      this.$router.push('/products/' + id + '/edit')
    },
    onDelete (id) {
      this.$store.dispatch('onDelete', { id })
    }
  },
  created () {

  }

}
</script>

<style>

</style>
