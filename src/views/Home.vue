<template>
  <div class="home">
    <img alt="Vue logo" :src="poster" height="300px">
    <Welcome msg="Ecommerce Apps"/>
    <!-- TODO: Halaman Login -->
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import Login from '../components/Login.vue'

export default {
  name: 'Home',
  data () {
    return {
      poster: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg'
    }
  },
  components: {
    Welcome,
    Login
  }
}
</script>
