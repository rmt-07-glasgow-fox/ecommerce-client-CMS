<template>
  <div>
    <h1>Add Category</h1>
    <form @submit.prevent="addCategory">
      <div class="mb-1">
        <label for="name" class="col-form-label">Category name</label>
        <input
          v-model="payload.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>

      <div class="mt-3 mb-3">
        <button type="submit" class="btn btn-sm btn-primary">Add</button>
        <router-link to="/admindashboard/categories" style="text-decoration: none">
          <button
            type="button"
            style="margin-left: 36px"
            class="btn btn-sm btn-danger"
          >
            Cancel
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      payload: {
        name: ''
      }
    }
  },
  methods: {
    addCategory () {
      this.$store.dispatch('addCategory', this.payload)
    }
  }
}
</script>
