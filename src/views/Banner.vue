<template>
  <div class="container">
    <Navbar></Navbar>
    <h1 class="text--center white--text mt-5 mb-5">Banners</h1>
    <DialogAdd></DialogAdd>
    <v-row justify="center">
      <v-col
        v-for="banner in banners"
        :key="banner.id"
        cols="4"
      >
        <BannerCard :banner="banner"></BannerCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DialogAdd from '../components/DialogAdd'
import BannerCard from '../components/BannerCard'
import Navbar from '../components/Navbar'
export default {
  name: 'Banner',
  components: {
    Navbar,
    BannerCard,
    DialogAdd
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchBanner')
  }
}
</script>

<style>
  .content {
    display: flex;
  }
</style>
