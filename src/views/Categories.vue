<template>
  <div>
    <!-- <v-container>
      <CategoryComboBox/>
    </v-container> -->
    <v-row class="mb-5">
      <v-col cols="12" md="6" class="pb-0">
          <v-text-field
            label="Search Products"
            prepend-icon="mdi-magnify"
            color="accent"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pt-0">
        <div class="d-flex justify-end align-center mt-5">
          <v-spacer></v-spacer>
          <v-chip class="ma-2" color="accent accent-4">{{ categories.length }} items</v-chip>
          <v-btn icon color="pink">
            <v-icon color="accent">mdi-view-dashboard</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <CategoryList/>
  </div>
</template>

<script>
import CategoryList from '@/components/categories/CategoryList.vue'
// import CategoryComboBox from '@/components/categories/CategoryComboBox.vue'
import { mapState } from 'vuex'

export default {
  components: {
    // CategoryComboBox,
    CategoryList
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
