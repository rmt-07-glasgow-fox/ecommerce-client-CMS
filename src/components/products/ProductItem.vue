<template>
  <v-col cols="12" sm="4" md="3" class="mb-4" align="center">
    <v-hover v-slot:default="{ hover }">
      <v-card max-width="270" max-height="270" align="center">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-chip x-small class="ma-2" color="red" text-color="white">
            Category
          </v-chip>
          <v-btn icon x-small><v-icon>mdi-eye</v-icon></v-btn>
        </v-card-actions>
        <v-img :src="product.image_url" width="150" height="150"></v-img>
        <!-- <v-img src="https://images.ctfassets.net/od02wyo8cgm5/mLZHqZZPNtMnnngEAsYgE/94a33a72f94467e064e01cb47ddc79ea/cloud_x_2-fw20-white_black-m-d.png" width="150" height="150"></v-img> -->
        <v-card-text class="accent--text">
          <span class="mb-1">{{ product.name }}</span><br>
          <v-chip :ripple="false" small color="success" outlined>
            Rp. {{ product.price }}
          </v-chip>
        </v-card-text>
        <v-expand-transition>
          <div v-if="hover" class="d-flex transition-fast-in-fast-out accent v-card--reveal display-3 white--text"
            style="height: 100%">
            <v-btn outlined="" color="white" :to="{name: 'Detail Product', params: {id: product.id}}">ZOOM</v-btn>
          </div>
        </v-expand-transition>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="updateStock"
              absolute="" color="accent" class="white--text" fab left top v-bind="attrs" v-on="on">
              <h2>{{ product.stock }}</h2>
            </v-btn>
          </template>
          <span>Stock</span>
        </v-tooltip>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>

export default {
  props: ['product'],
  components: {
  },
  methods: {
    updateStock () {
      const { id, stock } = this.product
      this.$store.dispatch('updateStockModal', {
        id: id,
        currentStock: stock
      }, { root: true })
    }
  }
}
</script>

<style>
 .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
