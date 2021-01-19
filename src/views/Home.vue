<template>
  <div class="home">
    <img alt="E-commerce logo" :src="logoPic">
    <HelloWorld msg="Welcome to E-commerce App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      logoPic: require('../assets/e_logo.png')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
