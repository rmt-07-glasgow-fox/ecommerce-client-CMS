<template>
  <div>
    <navbar />
    <div class="container mt-3">
      <div class="row mb-3 mt-3">
        <div class="col">
          <b-button variant="primary" @click="handleAddNewCategory" >Add new category</b-button>
        </div>
      </div>
      <router-view />
      <div class="row">
        <div class="col table-product text-center">
          <div v-if="products.length > 0">
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(field, idx) in fields" :key="idx" scope="col">{{ field }}</th>
                </tr>
              </thead>
              <tbody>
                <category-list
                  v-for="(category, idx) in categories"
                  :key="category.id"
                  :category="category"
                  :idx="idx"/>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h1>No Category. Please create a new one</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CategoryList from '../components/CategoryList'

export default {
  name: 'Category',
  data () {
    return {
      fields: ['#', 'Name', 'Action']
    }
  },
  components: { Navbar, CategoryList },
  props: [],
  methods: {
    handleAddNewCategory () {
      this.$router.push('/addcategory')
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    this.fetchCategories()
  },
  computed: {
    categories () {
      return this.$store.state.category.categories
    }
  }
}
</script>

<style>

</style>
