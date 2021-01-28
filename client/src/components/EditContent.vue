<template>
   <div class="my-container">
    <h1 style="text-align: center">Edit Content</h1>
    <br>
    <div class="d-flex align-items-center" style=" flex-direction: column;">
      <div class="col-4">
        <form>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-name" style="text-align: center" v-model="singleContent.name">
      </div>
      <br>
      <div class="form-group">
        <textarea type="text" class="form-control" id="edit-description" style="text-align: center" v-model="singleContent.description"></textarea>
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-category" placeholder="Category" style="text-align: center" v-model="singleContent.category">
      </div>
      <br>
      <div class="form-group">
        <input type="number" class="form-control" id="edit-price" placeholder="Price" style="text-align: center" v-model="singleContent.price">
      </div>
      <br>
      <div class="form-group">
        <input type="number" class="form-control" id="edit-stock" placeholder="Stock" style="text-align: center" v-model="singleContent.stock">
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-tags" placeholder="Tags" style="text-align: center" v-model="singleContent.tags">
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-imageUrl" placeholder="Image Url" style="text-align: center" v-model="singleContent.imageUrl">
      </div>
      <br>
      <div style="display: flex; justify-content: center">
      <button type="submit" class="btn btn-primary" @click.prevent="submitEditContent()">Edit Content</button> <button type="submit" class="btn btn-danger" @click.prevent="goToDashboard">Cancel</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  methods: {
    goToDashboard () {
      this.$router.push('/dashboard')
    },
    submitEditContent () {
      this.$store.dispatch('submitEditContent', this.singleContent)
    },
    fetchOneData () {
      this.$store.dispatch('fetchOneData', this.$route.params.id)
    }
  },
  created: function () {
    this.fetchOneData()
    this.$store.commit('checkAuth')
  },
  computed: {
    singleContent () {
      return this.$store.state.singleContent
    }
  }
}
</script>

<style>
.my-container {
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 12vh;
  background-color: #DBCFAB;
}
</style>
