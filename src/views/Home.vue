<template>
  <div class="home">
    <img alt="Vue logo" :src="poster" height="300px">
    <HelloWorld msg="Welcome to Munthe E-Commerce"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      poster: 'https://lovelive-store.bnarts.jp/assets/img/mainvisual-1_pc.png'
    }
  },
  components: {
    HelloWorld
  }
}
</script>
