<template>
  <div class="container">
    <div class="my-3 title">Category</div>
    <div class="btn btn-dark btn-sm mb-5" @click="addCategory"><i class="fas fa-plus"></i> Add Category</div>
    <table class="table">
      <tr>
        <th>No</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
      <category-card
        v-for="(category, index) in categories"
        :key="category.id"
        :category="category"
        :index="index"
      />
      <div v-if="categories.length < 1">No Category</div>
    </table>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapState } from 'vuex'
import CategoryCard from './CategoryCard.vue'

export default {
  components: { CategoryCard },
  name: 'Category',
  methods: {
    async addCategory () {
      const { value: category } = await Swal.fire({
        title: 'Add Category',
        html: `
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-briefcase"></i></label>
          <div class="col-sm-11">
            <input type="text" class="form-control" id="name" placeholder="name">
          </div>
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('name').value
          ]
        }
      })

      if (category) {
        const [name] = category
        this.$store.dispatch('addCategory', name)
      }
    },
    getCategory () {
      this.$store.dispatch('getCategory')
    }
  },
  computed: {
    ...mapState([
      'categories'
    ])
  },
  created () {
    this.getCategory()
  }
}
</script>

<style scoped>
  .title{
    font-size: 2em;
    font-weight: 1000;
  }
</style>
