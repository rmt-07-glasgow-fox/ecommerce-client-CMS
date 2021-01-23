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
export default {
  props: ['banner'],
  data () {
    return {
      card: {
        src: 'https://static.vecteezy.com/system/resources/thumbnails/000/669/988/original/Shopping_online_Hand_Banner.jpg',
        title: 'Here is the title',
        status: false
      }
    }
  },
  methods: {
    deleteBanner () {
      this.$store.dispatch('deleteProductModal', this.banner.id, true)
    },
    editBanner () {
      this.$store.dispatch('showFormModal', this.banner, true)
    },
    updateStatus () {
      this.$store.dispatch('updateStatus', { id: this.banner.id, status: this.banner.status }, true)
    }
  }
}
</script>

<style>

</style>
