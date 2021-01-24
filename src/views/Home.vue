<template>
  <div class="home">
    <img alt="Vue logo" :src="poster">
    <h4>{{ titlePage }}</h4>
    <HelloWorld msg="Welcome to Your new Online Shop!"/>
    <br><br>
    <div v-if="page === false" class="container">
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
      page: false,
      poster: 'https://i.imgur.com/B8B3iBy.png'
    }
  },
  components: {
    HelloWorld,
    LoginForm
  },
  computed: {
    titlePage () {
      return this.$store.state.titlePage
    }
  }
}
</script>
