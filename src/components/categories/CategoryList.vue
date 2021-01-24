<template>
  <div>
    <v-container fluid>
      <v-row v-if="categories.length > 0">
        <CategoryItem v-for="category in categories" :key="category.id" :category="category"/>
      </v-row>
      <v-row v-else>
      <v-col cols="12" align="center">
        NO DATA
          <!-- <v-card>NO DATA</v-card> -->
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import CategoryItem from '@/components/categories/CategoryItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CategoryItem
  },
  methods: {
    getAllCategories () {
      this.$store.dispatch('getAllCategories')
    }
  },
  created () {
    this.getAllCategories()
  },
  computed: {
    ...mapState({
      categories: state => state.mCategories.categories
    })
  }
}
</script>

<style>

</style>
