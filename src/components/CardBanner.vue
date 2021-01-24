<template>
  <div class="col-6">
    <div class="card ">
    <img :src="banner.image_url" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">{{banner.title}}</h5>
    <p class="card-text text-muted">status: {{banner.status}}</p>
    <div style="text-align:center">
    <a
      href="#"
      class="btn btn-warning btn-sm-2"
      @click.prevent="getEditBanner(banner.id)"
      style="margin-right: 10px;">
      Edit
      </a>
    <a
      href="#"
      class="btn btn-danger btn-sm-2"
      @click.prevent="destroyBanner(banner.id)">
      Delete
    </a>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBanner',
  props: ['banner'],
  methods: {
    getEditBanner (id) {
      this.$store.dispatch('getEditBanner', id)
    },
    destroyBanner (id) {
      this.$store.dispatch('destroyBanner', id)
    }
  }
}
</script>

<style>

</style>
