<template>
  <div>
    <BannerList
      v-for="banner in banners"
      :key="banner.id"
      :banner="banner"
    />
  </div>
</template>

<script>
import BannerList from './BannerList'
import { mapState } from 'vuex'

export default {
  name: 'BannerFetch',
  components: {
    BannerList
  },
  methods: {
    fetchingBanner () {
      this.$store.dispatch('fetchingBanner')
    }
  },
  created () {
    this.fetchingBanner()
  },
  computed: {
    ...mapState([
      'banners'
    ])
  }
}
</script>

<style>

</style>
