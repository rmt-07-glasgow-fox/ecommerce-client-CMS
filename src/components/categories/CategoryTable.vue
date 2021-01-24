<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">Category Name</th>
        <th scope="col">ID</th>
        <th scope="col">Stock Game</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="Category in Categories" :key="Category.id">
        <th scope="row">{{ Category.name }}</th>
        <td>{{ Category.id }}</td>
        <td>{{ Category.Products.length }}</td>
        <td>
          <router-link :to="`/admindashboard/categories/edit/${Category.id}`">
            <button class="btn btn-primary" style="margin-right: 2vw">
              Edit
            </button>
          </router-link>
          <button
            class="btn btn-danger"
            href=""
            @click="deleteCategory(Category.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CategoryTable',
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    deleteCategory (id) {
      this.$store.dispatch('deleteCategory', id)
    }
  },
  computed: {
    Categories () {
      return this.$store.state.category.categories
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>
