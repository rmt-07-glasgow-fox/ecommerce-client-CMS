<template>
  <div class="row mb-3 mt-3">
    <div class="col">
      <h1 class="mb-3">Add Banner</h1>
      <form @submit.prevent="handleAddCategory">
        <div class="form-group mt-1 row">
          <label for="input-name" class="col-sm-2 col-2 col-form-label">Name: </label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="name" class="form-control" id="input-name" placeholder="Category's name">
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNewBanner',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    handleAddCategory () {
      const { name } = this
      this.$store.dispatch('handleAddCategory', { name })
      this.name = ''
    }
  }
}
</script>

<style>

</style>
