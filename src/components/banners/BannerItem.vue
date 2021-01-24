<template>
  <v-col cols="12" md="6">
    <v-card>
      <v-img
        :src="banner.image_url"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="250px"
        min-height="100%"
      >
        <v-card-title v-text="banner.title"></v-card-title>
      </v-img>

      <v-card-actions style="max-height: 50px;">
        <v-switch
          v-model="banner.status"
          inset
          @change="updateStatus"
          class="ms-3"
          :label="`${banner.status ? 'Active' : 'Inactive'}`"
        ></v-switch>
        <v-spacer></v-spacer>

        <v-chip x-small class="ma-2" color="accent" text-color="white" v-if="banner.Category">
          {{ banner.Category && banner.Category.name }}
        </v-chip>
        <v-chip x-small class="ma-2" v-else> No category</v-chip>

        <v-btn icon @click="editBanner">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteBanner">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['banner'],
  data () {
    return {
    }
  },
  methods: {
    deleteBanner () {
      this.$store.dispatch('deleteBannerModal', this.banner.id, true)
    },
    editBanner () {
      this.$store.dispatch('showFormBanner', { data: this.banner, categories: this.categories }, true)
    },
    updateStatus () {
      this.$store.dispatch('updateStatus', { id: this.banner.id, status: this.banner.status }, true)
    },
    getAllCategory () {
      this.$store.dispatch('getAllCategories', null, true)
    }
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
