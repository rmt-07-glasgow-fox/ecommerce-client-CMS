<template>
  <div id="banners">
    <navbar></navbar>
      <div class="container w-screen my-20 mx-auto">
        <div class="flex w flex-wrap justify-items-center justify-center">
          <banner-card v-for="banner in banners"
          :key="banner.id"
          :banner="banner"></banner-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerCard from '@/components/BannerCard.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Banners',
  components: {
    BannerCard,
    Navbar
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next('/')
    }
  }
}
</script>
