<template>
  <nav>
    <v-app-bar dense color="white" dark app class="line" >
      <v-app-bar-nav-icon @click="changeDrawer">
        <v-icon class="accent--text">mdi-view-headline</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text--uppercase accent--text">
        <span>{{ currentRouteName }}</span>
      </v-toolbar-title>
      <template>
        <v-btn v-if="currentRouteName === 'Products'" color="accent" dark small absolute bottom right fab
          :to="{ name: 'Add Product' }">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  methods: {
    changeDrawer () {
      this.$store.commit('changeDrawer')
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>

<style>

</style>
