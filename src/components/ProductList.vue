<template>
  <tr>
    <th> {{ idx + 1 }} </th>
    <td><img :src="product.image_url" alt="" class="img-product"></td>
    <td> {{ product.name }}</td>
    <td> {{ maskPrice }}</td>
    <td> {{ maskStock }} </td>
    <td> {{ getCategories }} </td>
    <td>
        <button class="btn btn-warning mr-3" @click="editData(product.id)">Edit</button>
        <button type="button" class="btn btn-danger" @click="deleteData(product.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product', 'idx'],
  computed: {
    maskPrice () {
      return `Rp. ${Number(this.product.price).toLocaleString('id-ID')}`
    },
    maskStock () {
      return Number(this.product.stock).toLocaleString('id-ID')
    },
    getCategories () {
      if (this.product.Categories.length > 0) {
        const mapped = this.product.Categories.map(el => { return el.name })
        return mapped.join(', ')
      } else {
        return 'No Category'
      }
    }
  },
  methods: {
    editData (id) {
      this.$store.dispatch('getDataById', id)
    },
    deleteData (id) {
      this.$store.dispatch('deleteDataById', id)
    }
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

</style>
