<template>

  <div>
    <div v-if="!this.user_status">
      <Login></Login>
    </div>
    <div v-if="(this.user_status === 'admin') || (this.user_status === 'guest')">
      <div class='main-page'>
        <Navbar></Navbar>
        <router-view></router-view>
      </div>
        <Footer></Footer>
    </div>
  </div>

</template>

<script>
import Login from '../views/Login'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapState } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      user_status: localStorage.getItem('user_status')
    }
  },
  components: {
    Navbar,
    Footer,
    Login
  },
  computed: {
    ...mapState([
      'loginData'
    ])
  }
}
</script>

<style>
.main-page {
  min-height: 86vh;
}
</style>
