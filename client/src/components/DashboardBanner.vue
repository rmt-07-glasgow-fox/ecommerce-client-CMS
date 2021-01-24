<template>
  <tr>
      <td style="vertical-align: middle">{{banner.title}}</td>
      <td style="vertical-align: middle">{{banner.status}}</td>
      <td style="vertical-align: middle"><img :src="banner.imageUrl"></td>
      <td style="vertical-align: middle"><div style="display:flex; justify-content: center">
   <button class="btn btn-sm btn-primary" @click.prevent="goToEditBanner">Edit</button> <button class="btn btn-sm btn-danger" @click.prevent="deleteBanner"> Delete</button>
</div></td>
    </tr>
</template>

<script>
export default {
  name: 'DashboardBanner',
  props: ['banner'],
  methods: {
    goToEditBanner () {
      this.$router.push('/dashboard/editBanner/' + this.banner.id)
    },
    deleteBanner () {
      this.$store.dispatch('deleteBanner', this.banner.id)
      this.fetchBannerList()
    },
    fetchBannerList () {
      this.$emit('fetchBannerList')
    }
  },
  created: function () {
    this.fetchBannerList()
  },
  mounted: function () {
    this.fetchBannerList()
  }
}
</script>

<style>

</style>
