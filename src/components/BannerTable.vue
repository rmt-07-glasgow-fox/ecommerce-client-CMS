<template>
  <tr>
    <td class="align-middle">{{ banner.id }}</td>
    <td class="align-middle"><img :src="banner.image_url" class="thumbnail"></td>
    <td class="align-middle">{{ banner.title }}</td>
    <td class="align-middle">{{ banner.status }}</td>
    <td class="align-middle">
      <button class="btn btn-warning" @click="detailBanner">Edit</button>
      <button class="btn btn-danger ml-3" @click="deleteBanner">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'BannerTable',
  props: ['banner'],
  methods: {
    detailBanner () {
      this.$router.push('/banners/' + this.banner.id)
    },
    deleteBanner () {
      this.$store.dispatch('deleteBanner', this.banner.id)
    }
  }
}
</script>

<style>
.thumbnail {
  width: 160px;
  height: 90px;
}
</style>
