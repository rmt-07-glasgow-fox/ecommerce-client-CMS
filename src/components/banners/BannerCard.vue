<template>
  <div
    class="card shadow mb-3"
    style="border-radius: 8px; margin-left: auto; margin-right: auto"
  >
    <img
      :src="Banner.image_url"
      class="card-img-top"
      style="
        height: 320px
        overflow: hidden;
        align-item: center;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      "
    />
    <div class="card-body">
      <h5 class="card-title">{{ Banner.name }}</h5>
      <router-link :to="`/admindashboard/banners/edit/${Banner.id}`">
        <button
          href=""
          class="btn btn-outline-primary"
          style="margin-right: 32px"
        >
          Edit
        </button>
      </router-link>
      <button
        @click="deleteBanner(Banner.id)"
        href=""
        class="btn btn-outline-danger"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['Banner'],
  methods: {
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    }
  }
}
</script>
