<template>

  <tr>
    <!-- <th scope="row" class="align-middle">{{ index+1 }}</th> -->
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td><img class="product-image" :src="product.imageUrl" alt="gambar" srcset=""></td>
    <td>
      <button @click.prevent="editPage(product.id)" class="button is-warning mr-2">edit</button>
      <button @click.prevent="deleteProduct" class="button is-danger">delete</button>
    </td>
  </tr>

</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    editPage (id) {
      // this.$store.dispatch('editPagePopulate', this.product)
      const url = `/edit/${id}`
      this.$router.push(url)
    },
    deleteProduct () {
      this.$toasted.info('are you sure?', {
        action: [
          {
            text: 'yes',
            onClick: (e, toastObject) => {
              this.$store.dispatch('delete', this.product.id)
            }
          },
          {
            text: 'no',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        ]
      })
      // this.$store.dispatch('fetch')
    }
  },
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
