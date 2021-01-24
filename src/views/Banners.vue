<template>
  <div class="container">
    <NavigationBar />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(banner, index) in banners" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{banner.title}}</td>
          <td>
            <img
              :src="baseURL + banner.image_url"
              class="rounded"
              alt="..."
              width="200px"
            />
          </td>
          <td>{{banner.status}}</td>
          <td>
            <button @click="deleteBanner(banner.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavigationBar from '../components/NavigationBar'

export default {
  methods: {
    async deleteBanner (idBanner) {
        // console.log('>>> delete banner', idBanner)
        await this.$store.dispatch('deleteBanner', +idBanner)
    }
  },
  components: {
    NavigationBar
  },
  created () {
    this.$store.dispatch('getAllBanners')
  },
  computed: {
    ...mapState(['banners', 'baseURL'])
  }
}
</script>
