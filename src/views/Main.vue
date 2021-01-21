<template>

  <div>
    <Navbar></Navbar>
    <div class='main-page'>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  name: 'Main',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.main-page {
  min-height: 85vh;
}
</style>
