<template>
  <div>
    <h1>Edit Category</h1>
    <form @submit.prevent="updateSubmit">
      <input
        v-model="Category.id"
        type="text"
        class="form-control"
        id="id"
        style="display: none"
      />

      <div class="mb-1">
        <label for="name" class="col-form-label">Game Title</label>
        <input
          v-model="Category.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>

      <div class="mt-3 mb-3">
        <button type="submit" class="btn btn-sm btn-primary">Edit</button>
        <router-link
          to="/admindashboard/categories"
          style="text-decoration: none"
        >
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
  name: 'EditCategory',
  data () {
    return {
      payload: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    updateCategory () {
      this.$store.dispatch('updateCategory', this.payload)
    },
    fetchOneCategory () {
      this.$store.dispatch('fetchOneCategory', this.$route.params.id)
    },
    updateSubmit () {
      this.payload.id = this.Category.id
      this.payload.name = this.Category.name

      this.updateCategory()
    }
  },
  computed: {
    Category () {
      return this.$store.state.category.category
    }
  },
  created () {
    this.fetchOneCategory()
  }
}
</script>
