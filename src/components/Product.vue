<template>
<div>
  <h1>ini product</h1>
  <tr>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td><img class="product-image" :src="product.imageUrl" alt="gambar" srcset=""></td>
    <td>
      <button @click.prevent="editPage(product.id)" class="btn btn-warning m-1">edit</button>
      <button @click.prevent="deleteProduct" class="btn btn-danger">delete</button>
    </td>
  </tr>
</div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  // methods: {
  //   editPage (id) {
  //     // this.$store.dispatch('editPagePopulate', this.product)
  //     const url = `/edit/${id}`
  //     this.$router.push(url)
  //   },
  //   deleteProduct () {
  //     this.$toasted.info('are you sure?', {
  //       action: [
  //         {
  //           text: 'yes',
  //           onClick: (e, toastObject) => {
  //             this.$store.dispatch('delete', this.product.id)
  //           }
  //         },
  //         {
  //           text: 'no',
  //           onClick: (e, toastObject) => {
  //             toastObject.goAway(0)
  //           }
  //         }
  //       ]
  //     })
  //     // this.$store.dispatch('fetch')
  //   }
  // },
  data () {
    return {

    }
  }
}
</script>

<style>
.product-image{
  width: 70px;
}
</style>
