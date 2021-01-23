<template>
<v-card class="mx-auto">
  <v-img
    class="black--text align-end"
    height="200px"
    :src="products.image_url"
  >
    <v-card-title>{{products.name}}</v-card-title>
  </v-img>
    <v-card-subtitle class="pb-0 black--text">Name: {{products.name}}</v-card-subtitle>
    <v-card-text
      class="black--text"
    >
    <div class="font-weight-bold">Stock: {{products.stock}} pcs</div>
    <div>
     {{products.price.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}}
    </div>
    <v-card-actions>
      <v-row justify="start">
        <DialogEdit :product="products"></DialogEdit>
        <DialogDetail :product="products"></DialogDetail>
      <v-btn
        @click="deleteProduct(products.id)"
        color="red"
        text
      >
      Delete
      </v-btn>
      </v-row>
    </v-card-actions>
  </v-card-text>
</v-card>
</template>

<script>
import DialogEdit from './DialogEdit'
import DialogDetail from './DialogDetail'

export default {
  name: 'Dashboard',
  data: () => ({
    dialog: false,
    dialogDelete: false
  }),
  props: ['products'],
  components: {
    DialogEdit,
    DialogDetail
  },
  methods: {
    editItem (item) {
      console.log(item)
    },
    deleteProduct (id) {
      console.log('wew')
      this.$store.dispatch('deleteProduct', id)
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>

</style>
