<template>
  <div class="home">
    <img alt="banner" src="../assets/banner.jpg">
    <HelloWorld msg="Welcome to MyEcommerce.app"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
img {
  border-radius: 8px;
  width: 60%
}
</style>
