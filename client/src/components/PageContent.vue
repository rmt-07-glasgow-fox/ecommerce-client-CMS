<template>
  <div class="w3-main" style="margin-left:340px;margin-right:40px">
    <Header/>
    <Banner/>
    <Stocks/>
    <Designer/>
    <W3Container/>
  </div>
</template>

<script>
import Header from '@/components/PageContent/Header.vue'
import Banner from '@/components/PageContent/Banner.vue'
import Stocks from '@/components/PageContent/Stocks.vue'
import Designer from '@/components/PageContent/Designer.vue'
import W3Container from '@/components/PageContent/W3Container.vue'

export default {
  name: 'PageContent',
  components: {
    Header,
    Banner,
    Stocks,
    Designer,
    W3Container
  }
}
</script>

<style>

</style>
