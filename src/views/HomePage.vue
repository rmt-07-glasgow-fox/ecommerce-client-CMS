<template>
    <div id="nav">
      <Navbar></Navbar>
    <router-view/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
