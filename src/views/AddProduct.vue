<template>
  <div id="addProduct">
    <div>
        <h3>Fill each section</h3>
    </div>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Name Product"
         v-model="newData.name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Image Url"
         v-model="newData.image_url">
      </div>
      <div class="form-group">
        <input type="number" class="form-control" placeholder="Price (IDR)"
         v-model="newData.price">
      </div>
      <div class="form-group">
        <input type="number" class="form-control" placeholder="Stock"
         v-model="newData.stock">
      </div>
      <button type="submit" class="btn btn-success"
       @click.prevent="add">Confirm</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newData: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    add () {
      this.newData.forEach(el => {
        if (el === '') el = 0
      })
      this.$store.dispatch('tryAdd', this.newData)
    }
  }
}
</script>

<style scoped>
h3 {
    margin-bottom: 30px;
}
#addProduct {
    width: 40%;
    margin: 0px auto;
}
</style>
