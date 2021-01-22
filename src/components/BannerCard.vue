<template>
<div>
  <div class="banner-card p-2 m-3 shadow-md rounded">
    <img class="" :src="banner.image_url" style="height: 300px; width: 400px;">
    <div class="p-2">
      <h4 class="text-purple-900 font-medium">{{ banner.title }}</h4>
      <p class="text-gray-700 font-light text-sm">{{ banner.status }}</p>
    </div>
    <div class="flex w-full flex flex-row flex-wrap justify-center items-center">
      <a class="m-2 px-2 text-gray-800 font-bold hover:text-purple-800 active:bg-purple-600" href="#" @click.prevent="showEditBanner(banner.id)">edit</a>
      <a class="m-2 px-2 text-gray-600 font-bold hover:text-purple-400 active:bg-purple-600" href="#" @click.prevent="deleteBanner(banner.id)">delete</a>
    </div>
  </div>
   <!-- MODAL -->
</div>
</template>

<script>

export default {
  name: 'BannerCard',
  props: ['banner'],
  components: {},
  data () {
    return {
    }
  },
  methods: {
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    },
    showEditBanner (id) {
      this.$store.dispatch('showEditBanner', id)
      this.$store.commit('toggleModalEdit')
    }
  }
}
</script>
