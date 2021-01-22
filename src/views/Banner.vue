<template>
  <div>
    <div><Navbar/></div><br><br>
    <div><h3 style="margin-left:20px;">Your Banners: </h3></div>
    <div class="container">
      <div class="row">
        <CardBanner
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CardBanner from '../components/CardBanner'

export default {
  name: 'Banner',
  components: {
    Navbar,
    CardBanner
  },
  created () {
    this.$store.dispatch('fetchAllBanner')
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
