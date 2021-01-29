<template>
<div class="dashboard">
 <Navbar/>

<div class="container">
  <div class="columns">
   <Sidebar/>
    <div class="column">
      <div class="table-container">
   <router-view/>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '../components/Sidebar'
export default {
  name: 'Dashboard',
   created () {
    this.$store.dispatch('fetchProduct')
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>
