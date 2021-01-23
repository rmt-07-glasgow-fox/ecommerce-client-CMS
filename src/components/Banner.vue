<template>
  <div class="container">
    <div class="my-3 title">Banner</div>
    <div class="btn btn-dark btn-sm mb-5" @click="addBanner"><i class="fas fa-plus"></i> Add Banner</div>
    <div class="row d-flex justify-content-around">
      <banner-card
        class="card col-3 mx-2"
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
      />
      <div v-if="banners.length < 1">No Banner</div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapState } from 'vuex'
import BannerCard from './BannerCard.vue'
export default {
  components: { BannerCard },
  methods: {
    async addBanner () {
      const { value: banner } = await Swal.fire({
        title: 'Add Banner',
        html: `
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-briefcase"></i></label>
          <div class="col-sm-11">
            <input type="text" class="form-control" id="title" placeholder="title">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-toggle-on"></i></label>
          <div class="col-sm-11">
            <select class="form-control" id="status">
              <option value="active" selected>Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-image"></i></label>
          <div class="col-sm-11">
            <textarea type="number" class="form-control" id="image_url" rows="5" placeholder="image url"></textarea>
          </div>
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('title').value,
            document.getElementById('status').value,
            document.getElementById('image_url').value
          ]
        }
      })

      if (banner) {
        const [title, status, imageUrl] = banner
        const payload = {
          title,
          status,
          imageUrl
        }
        this.$store.dispatch('addBanner', payload)
      }
    },
    getBanner () {
      this.$store.dispatch('getBanner')
    }
  },
  computed: {
    ...mapState([
      'banners'
    ])
  },
  created () {
    this.getBanner()
  }
}
</script>

<style scoped>
  .title{
    font-size: 2em;
    font-weight: 1000;
  }
</style>
