<template>
  <div>
    <!-- navbar -->
    <Navbar/>
    <div class="container mx-auto px-4 mt-20 mb-20"> <!-- content -->
        <div class="container flex flex-col flex-wrap justify-center items-center overflow-x-auto" style="height: 70vh">
          <BannerCard
          v-for="banner in banners"
          :key="banner.id"
          :banner="banner"/>
        </div>
        <!--  -->
        <div v-if="showModalEdit" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <EditBanner/>
    </div>
    <div v-if="showModalEdit" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        <!--  -->
    </div> <!-- content -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import BannerCard from '@/components/BannerCard'
import EditBanner from '@/components/EditBanner'

export default {
  name: 'Banners',
  components: {
    Navbar,
    BannerCard,
    EditBanner
  },
  methods: {
    // toggleModalEdit () {
    //   this.$dispatch.dispatch('toggleModalEdit')
    // }
  },
  created () {
    this.$store.dispatch('fetchAllBanners')
  },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    showModalEdit () {
      return this.$store.state.showModalEdit
    },
    toggleModalEdit () {
      return this.$store.state.toggleModalEdit
    }
  }
}

</script>
