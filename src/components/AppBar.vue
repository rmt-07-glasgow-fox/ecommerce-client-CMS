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
        <v-btn v-if="currentRouteName === 'Banners'" color="accent" dark small absolute bottom right fab
          @click="showAddBanner">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-if="currentRouteName === 'Categories'" color="accent" dark small absolute bottom right fab
          @click="showAddCategory">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    changeDrawer () {
      this.$store.commit('changeDrawer')
    },
    showAddBanner () {
      this.$store.dispatch('showFormBanner', { data: null, categories: this.categories }, true)
    },
    showAddCategory () {
      this.$store.dispatch('showFormCategory', null, true)
    },
    getAllCategories () {
      this.$store.dispatch('getAllCategories', null, true)
    }
  },
  created () {
    this.$route.name === 'Banners' && this.getAllCategories()
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    },
    ...mapState({
      categories: state => state.mCategories.categories
    })
  }
}
</script>

<style>

</style>
