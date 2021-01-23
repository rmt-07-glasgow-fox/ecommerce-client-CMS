<template>
  <div>
    <NavSide/>
    <BannerPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerPage from '@/components/BannerPage.vue'
import NavSide from '@/components/NavSide.vue'

export default {
  name: 'Home',
  components: {
    NavSide,
    BannerPage
  }
}
</script>
