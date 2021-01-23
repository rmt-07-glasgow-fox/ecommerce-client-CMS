<template>
  <tr>
    <td class="align-middle">{{ product.id }}</td>
    <td class="align-middle"><img :src="product.image_url" class="thumbnail" alt=""></td>
    <td class="align-middle">{{ product.name }}</td>
    <td class="align-middle">Rp. {{ getPrice }},-</td>
    <td class="align-middle">{{ getStock }}</td>
    <td class="align-middle">{{ product.Category.name }}</td>
    <td class="align-middle">
      <button class="btn btn-warning" @click="editProduct">Edit</button>
      <button class="btn btn-danger ml-3" @click="deleteProduct">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductTable',
  props: {
    product: Object
  },
  methods: {
    editProduct () {
      const id = this.product.id
      this.$router.push('products/' + id)
    },
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
    }
  },
  computed: {
    getPrice () {
      const id = this.product.id
      return this.$store.getters.getPrice(id)
    },
    getStock () {
      const id = this.product.id
      return this.$store.getters.getStock(id)
    }
  }
}
</script>

<style>
.thumbnail {
  width: 100px;
  height: 100px;
}

</style>
