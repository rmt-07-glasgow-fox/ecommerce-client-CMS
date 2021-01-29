<template>
<div class="add">
  <div class="column"><img :src="payload.imageUrl" alt="" srcset=""></div>
<form @submit.prevent="createProduct" action="">
<div class="field">
  <div class="control">
    <input  v-model="payload.name" class="input" type="text" placeholder="product name">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="payload.imageUrl" class="input" type="text" placeholder="image url">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="payload.price" class="input" type="text" placeholder="price">
  </div>
</div>
<div class="field">
  <div class="control">
    <input v-model="payload.stock" class="input" type="text" placeholder="stock">
  </div>
</div>
<button class="button is-link">Submit</button>
</form>
<div class="column"></div>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      payload: {
        name: '',
        imageUrl: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    createProduct () {
      this.$store.dispatch('create', this.payload)
    }
  }
}
</script>
<style>
</style>
