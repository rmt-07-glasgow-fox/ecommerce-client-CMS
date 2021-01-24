<template>
  <main
    class="col-md-9 col-lg-10 px-md-4"
    style="margin-left: auto; margin-right: auto"
  >
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Banner</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <router-link
          to="/admindashboard/banners/add"
          style="text-decoration: none"
        >
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Add Banner
          </button>
        </router-link>
      </div>
    </div>

    <router-view> </router-view>

    <banner-card v-for="Banner in Banners" :key="Banner.id" :Banner="Banner" />
  </main>
</template>

<script>
import BannerCard from './BannerCard.vue'

export default {
  name: 'Banners',
  components: {
    BannerCard
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  computed: {
    Banners () {
      return this.$store.state.banner.banners
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>
