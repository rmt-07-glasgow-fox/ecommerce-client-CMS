<template>
  <div class="container-fluid edit-form">
    <form>
      <div class="card">
        <h3 class="card-header">Edit Data</h3>
        <div class="card-body">
            <div class="mb-3">
              <label>Product Name</label>
              <input v-model="payload.name" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label>Image Url</label>
              <input v-model="payload.image_url" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label>Price</label>
              <input v-model="payload.price" type="number" class="form-control">
            </div>
            <div class="mb-3">
              <label>Stock</label>
              <input v-model="payload.stock" type="text" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="edit">Edit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    populateProductData () {
      this.$store.dispatch('getCurrentData', this.$route.params.id)
        .then(({ data }) => {
          this.payload.name = data.name
          this.payload.image_url = data.image_url
          this.payload.price = data.price
          this.payload.stock = data.stock
        })
        .catch(console.log)
    },
    edit () {
      const payloadUpdate = {
        name: this.payload.name,
        image_url: this.payload.image_url,
        price: this.payload.price,
        stock: this.payload.stock,
        id: this.$route.params.id
      }
      this.$store.dispatch('editCurrentData', payloadUpdate)
    }

  },
  created () {
    this.populateProductData()
  }

}
</script>

<style scoped>
.edit
-form {
  margin-top: 80px;
  width: 50%;
}
</style>
