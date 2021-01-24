<template>
  <div class="container">
    <div class="row" v-if="bodyPage === 'content'">
      <div style="display: flex; justify-content: space-between;">
        <div>
          <h1 style="margin-top: 50px; margin-bottom: 0px">Content</h1>
        </div>
      <div style="align-self: flex-end">
        <button class = "btn btn-success" style="margin-bottom: 10px;" @click.prevent="goToAddFormContent">Add Content</button>
      </div>
    </div>
    <hr>
    <dashboard-content :content="content" @fetchContentList='fetchContentList' v-for="content in contents" :key="content.id" class="d-flex align-items-stretch"/>
    </div>
    <div class="row" v-if="bodyPage === 'banner'">
     <div style="display: flex; justify-content: space-between;">
        <div>
          <h1 style="margin-top: 50px; margin-bottom: 0px">Banner</h1>
        </div>
      <div style="align-self: flex-end">
        <button class = "btn btn-success" style="margin-bottom: 10px;" @click.prevent="goToAddFormBanner">Add Banner</button>
      </div>
    </div>
    <hr>
    <table class="table table-striped table-hover table-bordered" style="margin-top: 25px;">
      <thead>
        <tr style="text-align: center">
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody style="text-align: center">
        <dashboard-banner :banner="banner" @fetchBannerList='fetchBannerList' v-for="banner in banners" :key="banner.id"/>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardBanner from '@/components/DashboardBanner.vue'

export default {
  name: 'DashboardBody',
  data () {
    return {
      check: 0
    }
  },
  components: {
    DashboardContent,
    DashboardBanner
  },
  methods: {
    fetchContentList () {
      this.$store.dispatch('fetchContentList')
    },
    fetchBannerList () {
      this.$store.dispatch('fetchBannerList')
    },
    goToAddFormContent () {
      this.$router.push('/dashboard/addContent/')
    },
    goToAddFormBanner () {
      this.$router.push('/dashboard/addBanner/')
    }
  },
  created: function () {
    this.fetchContentList()
    this.fetchBannerList()
  },
  computed: {
    contents () {
      return this.$store.state.contentList
    },
    banners () {
      return this.$store.state.bannerList
    },
    bodyPage () {
      return this.$store.state.bodyPage
    }

  }
}
</script>

<style>

</style>
