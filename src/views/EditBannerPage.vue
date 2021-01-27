<template>
  <div class="border p-5 m-auto">
    <div>
      <h1><strong>Update banner</strong></h1>
    </div>
    <banner-form
      :banner="banner"
      :state="state">
    </banner-form>
  </div>
</template>

<script>
import BannerForm from '../components/BannerForm'
export default {
  name: 'EditBannerPage',
  data () {
    return {
      state: 'editPage'
    }
  },
  components: {
    BannerForm
  },
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner', this.$route.params.id)
    }
  },
  created () {
    this.fetchBanner()
  },
  computed: {
    banner () {
      return this.$store.state.banner
    }
  }
}
</script>

<style>

</style>
