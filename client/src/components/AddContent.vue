<template>
   <div class="my-container">
    <h1 style="text-align: center">Add Content</h1>
    <br>
    <div class="d-flex align-items-center" style=" flex-direction: column;">
      <div class="col-4">
        <form>
      <div class="form-group">
        <input type="text" class="form-control" id="add-name" placeholder="Name" style="text-align: center" v-model="newContent.name" required>
      </div>
      <br>
      <div class="form-group">
        <textarea type="text" class="form-control" id="add-description" aria-describedby="emailHelp" placeholder="description" style="text-align: center" v-model="newContent.description" required></textarea>
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="add-category" aria-describedby="emailHelp" placeholder="Category" style="text-align: center" v-model="newContent.category" required>
      </div>
      <br>
      <div class="form-group">
        <input type="number" class="form-control" id="add-price" aria-describedby="emailHelp" placeholder="Price" style="text-align: center" v-model="newContent.price" required>
      </div>
      <br>
      <div class="form-group">
        <input type="number" class="form-control" id="add-stock" placeholder="Stock" style="text-align: center" v-model="newContent.stock" required>
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="add-stock" placeholder="Tags" style="text-align: center" v-model="newContent.tags" required>
      </div>
      <br>
      <form enctype="multipart/form-data">
        <div class="form-group">
          <p style="text-align: center; margin-bottom: 0">Content Image (max. 5Mb)</p>
          <input type="file" class="form-control" ref="file">
        </div>
      </form>
      <br>
      <div style="display:flex; justify-content: center">
        <button type="submit" class="btn btn-primary" @click.prevent="onSelect">Add Content</button> <button type="submit" class="btn btn-danger" @click.prevent="goToDashboard">Cancel</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddContent',
  data () {
    return {
      newContent: {
        name: '',
        description: '',
        category: '',
        stock: '',
        price: '',
        tags: ''
      }
    }
  },
  methods: {
    onSelect () {
      const file = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', file)
      try {
        console.log('MASUK')
        localStorage.setItem('name', this.newContent.name)
        localStorage.setItem('description', this.newContent.description)
        localStorage.setItem('category', this.newContent.category)
        localStorage.setItem('stock', this.newContent.stock)
        localStorage.setItem('price', this.newContent.price)
        localStorage.setItem('tags', this.newContent.tags)
        this.$store.dispatch('addNewContentImage', formData)
      } catch (err) {
        console.log(err, 'gagal')
      }
    },
    goToDashboard () {
      this.$router.push('/dashboard')
    }
  },
  created () {
    this.$store.commit('checkAuth')
  }
}
</script>

<style>
.my-container {
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 12vh;
  background-color: #DBCFAB;
}
</style>
