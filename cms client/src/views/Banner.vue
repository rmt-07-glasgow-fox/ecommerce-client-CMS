<template>
  <div class="banners">
    <NavbarBanner></NavbarBanner>
    <h1>Banner Product List here..</h1>
    <div class="container">
      <div class="row">
        <BannerCard
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BannerCard from '../components/BannerCard.vue'
import NavbarBanner from '../components/NavbarBanner'

export default {
  name: 'Material',
  components: {
    BannerCard,
    NavbarBanner
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 50px;
}
</style>
