<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.name }}</td>
    <td style="max-width: 250px;">{{ product.description }}</td>
    <td>{{ product.category }}</td>
    <td>
      <img v-if="product.image_url.length > 0" alt="Product Image" :src="product.image_url" />
      <img v-else class="mx-auto" alt="Product image" src="../assets/empty-image.png" />
    </td>
    <td> {{ formatPrice(product.price) }}
    </td>
    <td>{{ product.stock }}</td>
    <td class="px-3">
      <div class="row">
        <button class="btn btn-info mx-auto" @click.prevent="editProduct(product.id)">
          <font-awesome-icon icon="edit" />
        </button>
        <button class="btn btn-danger mx-auto" @click.prevent="deleteProduct(product.id)">
          <font-awesome-icon icon="trash-alt" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductRow',
  props: ['product'],
  methods: {
    formatPrice (price) {
      return price.toLocaleString('id', {
        style: 'currency',
        currency: 'IDR'
      })
    },
    editProduct (id) {
      this.$router.push({ name: 'Edit Product', params: { productId: id } })
    },
    deleteProduct (id) {
      const context = this

      this.$dlg.alert('Are you sure?', function () {
        context.$store.dispatch('deleteProduct', id)
      }, {
        messageType: 'confirm',
        icon: false
      })
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
button {
  width: 40px;
}
</style>
