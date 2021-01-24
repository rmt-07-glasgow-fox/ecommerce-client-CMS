<template>
  <div>
    <div class="form-group">
        <label for="">Title</label>
        <input type="text" class="form-control" v-model="banner.title">
    </div>
    <div class="form-group">
        <label for="">Image URL</label>
        <input type="text" class="form-control" v-model="banner.image_url">
    </div>
    <div class="form-group">
      <label for="">Status Active</label>
      <select v-model="banner.status" class="form-control">
        <option value="false">Not Active</option>
        <option value="true">Active</option>
      </select>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormBanner',
  data () {
    return {
      banner: {
        title: '',
        image_url: '',
        status: 'false'
      }
    }
  },
  methods: {
    ...mapActions('banner', [
      'getBanners',
      'addBanners',
      'editBanners',
      'updateBanners'
    ]),

    submit () {
      if (this.$route.name === 'banner.add') {
        this.addBanners(this.banner)
      } else if (this.$route.name === 'banner.edit') {
        Object.assign(this.banner, { id: this.$route.params.id })
        this.updateBanners(this.banner)
      }
    }
  },
  created () {
    if (this.$route.name === 'banner.edit') {
      this.editBanners(this.$route.params.id).then(res => {
        this.banner = {
          title: res.data.title,
          image_url: res.data.image_url,
          status: res.data.status
        }
      })
    }
  }
}
</script>
