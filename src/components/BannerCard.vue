<template>
    <v-card
        class="mx-auto"
      >
      <v-img
        class="black--text align-end"
        height="200px"
        :src="banner.image_url"
      >
      <v-card-title>{{ banner.title}}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">{{banner.title}}</v-card-subtitle>
      <v-card-text>
        <div>Status: {{ banner.status }}</div>
        <div>
          card text2
        </div>
        <v-card-actions>
          <v-row justify="center">
          <DialogEdit :banner="banner"></DialogEdit>
          <DialogDetail :banner="banner"/>
          <v-btn
            color="red"
            text
            @click="deleteBanner(banner.id)"
            class=""
          >
          <v-icon size="medium" class="me-2">mdi-delete</v-icon>
          Delete
          </v-btn>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
</template>

<script>
import DialogEdit from './DialogEdit.vue'
import DialogDetail from './DialogDetail'
export default {
  name: 'Banner',
  props: ['banner'],
  components: {
    DialogEdit,
    DialogDetail
  },
  methods: {
    banners () {
      console.log(this.banner)
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    }
  }
}
</script>

<style>

</style>
