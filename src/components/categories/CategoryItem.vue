<template>
  <tr>
    <td scope="row">{{ index + 1 }}</td>
    <td v-if="!showEditActive">{{ category.name }}</td>
    <td v-if="!showEditActive">
      <button class="btn btn-warning mr-2" @click="showEditForm">
        <i class="fa fa-edit" aria-hidden="true"></i></button
      ><button class="btn btn-danger" @click="deleteCategory(category.id)">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </td>
    <td colspan="2" v-if="showEditActive">
      <form>
        <label :for="category.id">Name: </label>
        <input :id="category.id" class="form-control w-25 mb-3" v-model="name" />
        <button type="submit" class="btn btn-warning mx-2" @click="updateCategory(category.id)">
          Edit</button
        ><button class="btn btn-danger" @click="hideEditForm">
          Cancel
        </button>
      </form>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: ['index', 'category'],
  data() {
    return {
      name: this.category.name,
      showEditActive: false,
    };
  },
  methods: {
    showEditForm() {
      this.showEditActive = true;
    },
    hideEditForm() {
      this.showEditActive = false;
    },
    async updateCategory(id) {
      try {
        const payload = {
          id,
          name: this.name,
        };
        await this.$store.dispatch('updateCategory', payload);
        this.hideEditForm();
        this.$swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Category has been updated',
        });
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
    deleteCategory(id) {
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await this.$store.dispatch('deleteCategory', id);
              this.$swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Category has been deleted',
              });
            } catch (err) {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
              });
            }
          }
        });
    },
  },
};
</script>

<style></style>
