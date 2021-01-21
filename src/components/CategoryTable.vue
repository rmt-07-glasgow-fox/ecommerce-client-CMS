<template>
  <tr>
    <td class="align-middle">{{ no }}</td>
    <td class="align-middle">{{ category.name }}</td>
    <td class="align-middle"><i :class="faClass"></i></td>
    <td class="align-middle">
      <button class="btn btn-warning" @click="detailCategory">Edit</button>
      <button class="btn btn-danger ml-3" @click="deleteCategory">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CategoryTable',
  props: ['category', 'index'],
  computed: {
    faClass () {
      return 'fas fa-' + this.category.image
    },
    no () {
      return this.index + 1
    }
  },
  methods: {
    deleteCategory () {
      const id = this.category.id
      this.$store.dispatch('deleteCategory', id)
    },
    detailCategory () {
      const id = this.category.id
      this.$router.push('/categories/' + id)
    }
  }
}
</script>

<style>

</style>
