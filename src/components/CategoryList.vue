<template>
  <tr>
    <th> {{ idx + 1 }} </th>
    <td> {{ category.name }}</td>
    <td>
        <button class="btn btn-warning mr-3" @click="editData(category.id)">Edit</button>
        <button type="button" class="btn btn-danger" @click="deleteData(category.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CategoryList',
  props: ['category', 'idx'],
  methods: {
    editData (id) {
      this.$store.dispatch('getCategoryById', id)
    },
    deleteData (id) {
      this.$store.dispatch('deleteCategoryById', id)
    }
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

</style>
