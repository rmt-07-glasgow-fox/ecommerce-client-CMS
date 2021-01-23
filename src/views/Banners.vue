<template>
  <div>
    <!-- BANNER -->
    <v-row>
      <v-col cols="12" sm="6">
          <v-text-field
            label="Search Banner"
            prepend-icon="mdi-magnify"
            color="accent"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm=6>
        <div class="d-flex justify-end align-center mt-4">
          <v-spacer></v-spacer>
          <v-chip class="ma-2" color="accent accent-4">{{ banners.length }} items</v-chip>
          <v-btn icon color="pink">
            <v-icon color="accent">mdi-view-dashboard</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <BannerList/>
    <router-view/>
  </div>
</template>

<script>
import BannerList from '@/components/banners/BannerList'
import RouterView from '../components/RouterView.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BannerList,
    RouterView
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
