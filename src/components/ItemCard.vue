<template>
    <tr>
      <td class="counterCell"></td>
      <td><img class="gambar-product" :src="product.image_url"></td>
      <td><p>{{product.name}}</p></td>
      <td><p>{{product.stock}}</p></td>
      <td><p>{{product.price}}</p></td>
      <td>
        <ul style="list-style-type:none" class="p-0 action-btn">
            <li>
              <button @click="editProduct" class="btn btn-warning shadow p-0 actionbutton">
                <i class="fa fa-edit fa-fw"></i>
              </button>
            </li>
            <li>
              <button @click="updateStock" class="btn btn-success shadow p-0 actionbutton">
                <i class="text-white">S</i>
              </button>
            </li>
            <li>
              <button @click="deleteProduct" class="btn btn-danger shadow p-0 actionbutton">
                <i class="fa fa-trash-o fa-fw"></i>
              </button>
            </li>
          </ul>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['product'],
  data () {
    return {
      productName: ''
    }
  },
  methods: {
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct () {
      const id = this.product.id
      this.$router.push(`/editProduct/${id}`)
    },
    updateStock () {
      const id = this.product.id
      this.$store.dispatch('updateStock', id)
    }
  }
}
</script>

<style>
</style>
