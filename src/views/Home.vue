<template>
  <div class="home">
    <HelloWorld msg="WELCOME!"/>
    <img src="https://3.bp.blogspot.com/-lVQGyOnsVsg/V2JxOs6U71I/AAAAAAAAHEk/eARt6CHMAEoLikB6EZcu8iFiOQ4mOgaTACK4B/s1600/1.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
