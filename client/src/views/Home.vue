<template>
  <div>
    <NavSide/>
    <PageContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageContent from '@/components/PageContent.vue'
import NavSide from '@/components/NavSide.vue'

export default {
  name: 'Home',
  components: {
    NavSide,
    PageContent
  }
}
</script>
