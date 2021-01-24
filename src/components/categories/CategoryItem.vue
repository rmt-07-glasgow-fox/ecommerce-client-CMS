<template>
  <div class="ma-3">
    <v-card>
        <v-card-title
          class="accent white--text" v-text="category.name">
        </v-card-title>

      <v-card-actions style="max-height: 50px;">
        <v-spacer></v-spacer>

        <v-btn icon @click="editCategory">
          <v-icon color="warning">mdi-pencil</v-icon>
        </v-btn>

        <v-btn icon @click="deleteCategory">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>

      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    deleteCategory () {
      this.$store.dispatch('deleteCategoryModal', this.category.id, true)
    },
    editCategory () {
      this.$store.dispatch('showFormCategory', this.category, true)
    }
  }
}
</script>

<style>

</style>
