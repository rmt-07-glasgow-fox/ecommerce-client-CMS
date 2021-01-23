<template>
  <div>
    <div class="bg-secondary container-fluid">
      <div class="row justify-content-center align-self-center p-2">
        <h1 class="text-white title">ANTZ SHOP CMS</h1>
      </div>
    </div>
    <Navbar/>
    <div class="viewing">
    <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  methods: {
    fetchAllProduct () {
      this.$store.dispatch('fetchAllProduct')
    },
    fetchAllCategory () {
      this.$store.dispatch('fetchAllCategory')
    },
    fetchAllBanner () {
      this.$store.dispatch('fetchAllBanner')
    }
  },
  created () {
    this.fetchAllProduct()
    this.fetchAllCategory()
    this.fetchAllBanner()
  }
}
</script>

<style>
.title {
  text-shadow: 2px 2px black;
}
.viewing {
  min-height: 75vh;
}
</style>
