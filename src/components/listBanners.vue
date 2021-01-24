<template>
<div class="row">
  <div class="bg-white rounded container m-10" style=" width:100%; overflow-y: scroll; height:80vh;">
    <div class="row">
    <div class="card" v-for="banner in banners" :key="banner.id">
          <img :src="banner.imageUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h6 class="card-title">{{ banner.title }}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border-0">status: {{ banner.status }}</li>
          </ul>
          <div class="card-body">
            <button class="btn btn-sm btn-link" @click="goToEdit(banner.id)"> Edit</button>
            <button class="btn btn-sm btn-link" @click="deleteBanner(banner.id)"> Delete</button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListBanners',
  methods: {
    goToEdit (id) {
      this.$router.push(`/banners/${id}/edit`)
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    },
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
