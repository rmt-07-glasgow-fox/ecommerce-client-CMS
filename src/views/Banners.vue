<template>
  <div>
    <navbar />
    <div class="container mt-3">
      <div class="row mb-3 mt-3">
        <div class="col">
          <b-button variant="primary" @click="handleAddNewBanner" >Add new banner</b-button>
        </div>
      </div>
      <router-view />
      <div class="row">
        <div class="col table-product text-center">
          <table class="table">
            <thead>
              <tr>
                <th v-for="(field, idx) in fields" :key="idx" scope="col">{{ field }}</th>
              </tr>
            </thead>
            <tbody>
              <banner-list
                v-for="(banner, idx) in banners"
                :key="banner.id"
                :banner="banner"
                :idx="idx"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import BannerList from '../components/BannerList'

export default {
  name: 'Banner',
  data () {
    return {
      fields: ['#', 'Image', 'Title', 'Status', 'Action']
    }
  },
  components: { Navbar, BannerList },
  props: [],
  methods: {
    handleAddNewBanner () {
      this.$router.push('/addbanner')
    },
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchBanners()
  },
  computed: {
    banners () {
      return this.$store.state.banner.banners
    }
  }
}
</script>

<style>

</style>
