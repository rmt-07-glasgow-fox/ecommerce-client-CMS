<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <!-- show Banner -->
    <div style="text-align: center">
      <h4 style="font-weight:bold; padding: 15px" >Banners</h4>
    </div>
    <div class="container cont-banner">
      <div class="row">
        <CardBanner
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
        />
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CardBanner from '../components/CardBanner'
import Footer from '../components/Footer'

export default {
  name: 'Banner',
  components: {
    Navbar,
    CardBanner,
    Footer
  },
  created () {
    this.$store.dispatch('fetchBanner')
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>
.cont-banner {
  height: 70vh;
}
h3 {
  margin-left: 15px;
}
</style>
