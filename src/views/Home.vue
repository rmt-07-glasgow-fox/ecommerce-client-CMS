<template>
  <div class="row mx-2">
    <side-bar class="side-bar mt-4"></side-bar>

    <div class="col-10 p-5">
      <div class="pb-5 transparent">
        <div class="d-flex p-2 center-image">
          <img alt="E-commerce logo" :src="logoPic">
        </div>
        <div class="center my-4">
          <HelloWorld msg="Welcome to E-commerce App"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from '../components/SideBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SideBar
  },
  computed: {
    logoPic () {
      return this.$store.state.logoPic
    }
  }
}
</script>

<style scoped>
.center-image {
  margin: auto;
  width: 50%;
}
.center {
  margin: 0 28%;
  width: 60%;
}
.side-bar {
  display: flex;
  flex-flow: column;
  height: 130vh
}
</style>
