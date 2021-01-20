<template>
  <v-app>
    <SideBar/>
    <AppBar/>
    <v-main>
      <v-container fluid>
        <RouterView/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import AppBar from '@/components/AppBar.vue'
import RouterView from '@/components/RouterView'

export default {
  components: {
    SideBar,
    AppBar,
    RouterView
  }
}
</script>

<style>

</style>
