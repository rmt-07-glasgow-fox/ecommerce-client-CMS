<template>
  <div class="d-flex justify-content-start flex-wrap mt-3">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-card mx-2 p-3 bg-white rounded shadow-sm position-relative"
    >
      <div @click="deleteCategory(category.id)" class="position-absolute delete-icon text-muted">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h6 class="">{{ category.name }}</h6>
      <small class="text-muted">Total Products: {{ category.Products.length }}</small>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CardCategory',
  methods: {
    deleteCategory (id) {
      this.$store.dispatch('deleteCategories', id)
    }
  },
  computed: {
    ...mapState([
      'categories'
    ])
  }
}
</script>

<style scoped>
.category-card {
  width: 16rem;
  margin-top: 1rem;
}
.delete-icon {
  right: 1rem;
  top: .5rem;
  width: 1rem;
  height: 1rem;
}
.delete-icon:hover {
  cursor: pointer;
}
</style>
