<template>
  <div>
    <v-row v-if="banners.length > 0">
      <BannerItem v-for="banner in banners" :key="banner.id" :banner="banner"/>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center">
        NO DATA
          <!-- <v-card>NO DATA</v-card> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerItem from '@/components/banners/BannerItem.vue'

export default {
  components: {
    BannerItem
  },
  methods: {
    getAllBanners () {
      this.$store.dispatch('getAllBanners', null, { root: true })
    }
  },
  created () {
    this.getAllBanners()
  },
  computed: {
    ...mapState({
      banners: state => state.mBanners.banners
    })
  }
}
</script>

<style>

</style>
