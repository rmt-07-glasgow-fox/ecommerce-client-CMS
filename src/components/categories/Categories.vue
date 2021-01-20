<template>
  <div class="container-fluid">
    <h1 class="mt-4">Categories</h1>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary mb-3" @click="showAddForm">Add Category</button>
        <div class="card mb-3 w-50 p-3" v-if="showFormActive">
          <form @submit.prevent="addCategory">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Enter Name Category"
              />
            </div>
            <button type="submit" class="btn btn-primary mr-2">
              Create
            </button>
            <button type="button" @click="hideAddForm" class="btn btn-danger">
              Close
            </button>
          </form>
        </div>
        <table class="table table-striped" v-if="categories.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <category-item
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
</template>

<script>
import CategoryItem from './CategoryItem.vue';

export default {
  name: 'Categories',
  components: { CategoryItem },
  data() {
    return {
      showFormActive: false,
      name: '',
    };
  },
  methods: {
    showAddForm() {
      this.showFormActive = true;
    },
    hideAddForm() {
      this.showFormActive = false;
    },
    async addCategory() {
      try {
        const payload = {
          name: this.name,
        };
        await this.$store.dispatch('addCategory', payload);
        this.name = '';
        this.hideAddForm();
        this.$swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Category has been added',
        });
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  created() {
    this.$store.dispatch('fetchCategories');
  },
};
</script>

<style></style>
