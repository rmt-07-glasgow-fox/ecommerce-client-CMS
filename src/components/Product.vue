<template>

  <tr>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td><img class="product-image" :src="product.imageUrl" alt="gambar" srcset=""></td>
    <td>
      <button @click.prevent="editPage(product.id)" class="button is-warning mr-2">edit</button>
      <button @click.prevent="deleteProduct" class="button is-danger">delete</button>
    </td>
  </tr>

  <!-- <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img class="product-image" :src="product.imageUrl" alt="gambar" srcset="">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ product.name }}</p>
        <p class="subtitle is-6">{{ product.price }}</p>
      </div>
    </div> -->

    <!-- <div class="content">
      <button @click.prevent="editPage(product.id)" class="button is-warning mr-2">edit</button>
      <button @click.prevent="deleteProduct" class="button is-danger">delete</button>
    </div>
  </div> -->
<!-- </div> -->

</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    editPage (id) {
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
      // this.$store.dispatch('fetchProduct')
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
