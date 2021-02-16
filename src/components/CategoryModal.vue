<template>
  <div>
    <b-modal
      id="category-list"
      size="sm"
      title="List Category"
      no-close-on-backdrop
      :hide-footer="true">
      <b-table
        sticky-header="600px"
        no-border-collapse
        :hover="true"
        :fields="fields"
        :items="categories"
        head-variant="light">
        <template #cell(id)="data">
          <i style="" id="trash-icon" class="fas fa-trash"
            @click.prevent="deleteConfirmation(data.item.id)">
          </i>
        </template>
      </b-table>
    </b-modal>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'CategoryModal',
  data () {
    return {
      fields: [
        { key: 'categoryName', label: 'Category Name' },
        { key: 'id', label: '' }
      ]
    }
  },
  methods: {
    deleteConfirmation (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to retrieve this category back!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteCategory', id)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style scoped>
  #trash-icon i {
    color:rgb(0, 0, 0) !important;
    opacity: 0.7 !important;
  }

  #trash-icon i:hover {
    cursor: pointer;
    opacity: 1;
  }
</style>
