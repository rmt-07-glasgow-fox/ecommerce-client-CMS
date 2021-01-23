<template>
  <div class="border p-5 m-auto">
    <div>
      <h1><strong>Add new banner</strong></h1>
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
  name: 'AddBannerPage',
  components: { BannerForm },
  data () {
    return {
      banner: {},
      state: 'addBanner'
    }
  }
}
</script>

<style>

</style>
