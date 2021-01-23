<template>
  <tr>
    <td>{{ index+1 }}</td>
    <td>{{ category.name }}</td>
    <td>
      <button class="btn btn-dark btn-sm" @click="editCategory"><i class="fas fa-pen"></i> Edit</button >
      <button class="btn btn-danger btn-sm ml-2" @click="deleteCategory(category.id)"><i class="fas fa-trash"></i> Delete</button>
    </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'CategoryCard',
  props: ['category', 'index'],
  methods: {
    async editCategory () {
      const { value: category } = await Swal.fire({
        title: 'Add Category',
        html: `
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-briefcase"></i></label>
          <div class="col-sm-11">
            <input type="text" class="form-control" id="name" placeholder="name" value="${this.category.name}">
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
        const payload = {
          id: this.category.id,
          name
        }
        this.$store.dispatch('editCategory', payload)
      }
    },
    deleteCategory (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteCategory', id)
        }
      })
    }
  }
}
</script>

<style>

</style>
