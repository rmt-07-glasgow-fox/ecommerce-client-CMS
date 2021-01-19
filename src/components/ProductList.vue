<template>
  <tr>
    <th> {{ product.id }} </th>
    <td><img :src="product.image_url" alt="" class="img-product"></td>
    <td> {{ product.name }}</td>
    <td> {{ maskPrice }}</td>
    <td> {{ maskStock }} </td>
    <td>
        <button class="btn btn-warning mr-3" @click="editData(product.id)">Edit</button>
        <button type="button" class="btn btn-danger" @click="deleteData(product.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
  computed: {
    maskPrice () {
      return `Rp. ${Number(this.product.price).toLocaleString('id-ID')}`
    },
    maskStock () {
      return Number(this.product.stock).toLocaleString('id-ID')
    }
  },
  methods: {
    editData (id) {
      this.$emit('editProductId', id)
      // this.$router.push('/editproduct/' + id)
    },
    deleteData (id) {
      this.$emit('deleteDataId', id)
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
