<template>
  <div class="w3-main" style="margin-left:340px;margin-right:40px">
    <Header/>
    <Stocks/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/BannerContent/Header.vue'
import Stocks from '@/components/BannerContent/Stocks.vue'
import Footer from '@/components/BannerContent/Footer.vue'

export default {
  name: 'BannerPage',
  components: {
    Header,
    Stocks,
    Footer
  }
}
</script>

<style>

</style>
