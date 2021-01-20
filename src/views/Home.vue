<template>
  <div class="home">
    <img alt="Vue logo" :src="poster">
    <HelloWorld msg="Welcome to Your new Online Shop!"/>
  </div>
</template>
<style scoped>
  img {
    width: 20%;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      poster: 'https://toppng.com/uploads/preview/logo-store-png-clothing-shop-logo-11563048950nluklrhtlb.png'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
