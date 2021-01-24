<template>
  <main
    class="col-md-9 col-lg-10 px-md-4"
    style="margin-left: auto; margin-right: auto"
  >
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Category</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <router-link
          to="/admindashboard/categories/add"
          style="text-decoration: none"
        >
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Add Category
          </button>
        </router-link>
      </div>
    </div>

    <router-view> </router-view>

    <category-table />
  </main>
</template>

<script>
import CategoryTable from './CategoryTable.vue'

export default {
  name: 'Categories',
  components: {
    CategoryTable
  }
}
</script>
