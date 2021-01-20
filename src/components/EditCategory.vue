<template>
  <div class="row mb-3 mt-3">
    <div class="col">
      <h1 class="mb-3">Edit Category</h1>
      <form @submit.prevent="handleEditCategory">
        <div class="form-group mt-1 row">
          <label for="input-title" class="col-sm-2 col-2 col-form-label">Name: </label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="categoryById.name" class="form-control" id="input-title" placeholder="Category's title">
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditCategory',
  data () {
    return { }
  },
  props: [],
  methods: {
    handleEditCategory () {
      this.$store.dispatch('handleUpdateCategoryById', {
        id: this.$route.params.id,
        name: this.categoryById.name
      })
    },
    getCategoryById () {
      this.$store.dispatch('getCategoryById', this.$route.params.id)
    }
  },
  created () {
    this.getCategoryById()
  },
  computed: {
    categoryById () {
      return this.$store.state.category.category
    }
  }
}
</script>

<style>

</style>
