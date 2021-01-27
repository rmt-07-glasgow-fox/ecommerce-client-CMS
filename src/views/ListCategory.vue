<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
        <h1 class="text-dark">List All Category</h1>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Icon</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <CategoryTable
                v-for="(category, index) in categories"
                :key="index"
                :category="category"
                :index="index"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTable from '../components/CategoryTable'

export default {
  name: 'ListCategory',
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  components: {
    CategoryTable
  }
}
</script>

<style>

</style>
