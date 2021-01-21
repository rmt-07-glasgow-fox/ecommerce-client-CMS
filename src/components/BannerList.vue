<template>
  <tr>
    <th> {{ idx + 1 }} </th>
    <td><img :src="banner.image_url" alt=""></td>
    <td> {{ banner.title }}</td>
    <td> {{ banner.status }}</td>
    <td>
        <button class="btn btn-warning mr-3" @click="editData(banner.id)">Edit</button>
        <button type="button" class="btn btn-danger" @click="deleteData(banner.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['banner', 'idx'],
  methods: {
    editData (id) {
      this.$store.dispatch('getBannerById', id)
    },
    deleteData (id) {
      this.$store.dispatch('deleteBannerById', id)
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
