<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
        <h1 class="text-dark">List All Banner</h1>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <BannerTable
              v-for="banner in banners"
              :key="banner.id"
              :banner="banner"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerTable from '../components/BannerTable'

export default {
  name: 'ListBanners',
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  components: {
    BannerTable
  }
}
</script>

<style>

</style>
