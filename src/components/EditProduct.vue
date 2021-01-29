<template>
<div class="edit">
  <div class="column"><img :src="currentData.imageUrl" alt="" srcset=""></div>
<form @submit.prevent="doEdit" action="">
<div class="field">
  <div class="control">
    <input v-model="currentData.name" class="input" type="text">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input" type="text" img :src="currentData.imageUrl">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input" type="text" v-model="currentData.price">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input" type="text" v-model="currentData.stock">
  </div>
</div>
<button class="button is-link">Update</button>
</form>
<div class="column"></div>
</div>
</template>

<script>
export default {
  name: 'EditProduct',
  // props: ['product'],
  methods: {
    getPopulateData () {
      const id = +this.$route.params.id
      this.$store.dispatch('findByPk', id)
    },
    doEdit () {
      this.$store.dispatch('updateProduct', this.currentData)
    }
  },
  created () {
    this.getPopulateData()
  },
  computed: {
    currentData () {
      return this.$store.state.editProduct
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style>
</style>
