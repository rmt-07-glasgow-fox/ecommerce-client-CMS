<template>
  <div class="home">
    <img alt="Vue logo" :src="poster">
    <HelloWorld msg="Welcome to Your new Online Shop!"/>
    <div class="container">
      <LoginForm/>
    </div>
  </div>
</template>
<style scoped>
  img {
    width: 20%;
  }
</style>

<script>
// @ is an alias to /src
// import axios from '../api/axios'
import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm from '../components/LoginForm'

export default {
  name: 'Home',
  data () {
    return {
      poster: 'https://toppng.com/uploads/preview/logo-store-png-clothing-shop-logo-11563048950nluklrhtlb.png'
    }
  },
  components: {
    HelloWorld,
    LoginForm
  },
  methods: {
    // login () {
    //   axios
    //     .post('/login')
    //     .then(({ data }) => {
    //       this.
    //     })
    // }
  }
}
</script>
