<template>
    <v-row justify="end">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          v-on="on"
          v-if="params === 'Home'"
          class="mb-1"
        >
          <i class="fas fa-plus pr-2"></i>
          New Product
        </v-btn>
        <v-btn
          color="white"
          text
          v-bind="attrs"
          v-on="on"
          v-else
        >
          <i class="fas fa-plus pr-1"></i>
          New Banner
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline" v-if="params === 'Home'">New Product</span>
          <span class="headline" v-else>New Banner</span>
        </v-card-title>
        <v-card-text>
          <v-container v-if="params === 'Home'">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name*"
                  v-model="form.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image-Url*"
                  v-model="form.imageUrl"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                label="Price$"
                type="number"
                v-model="form.price"
                required
                >

                </v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
              <v-text-field
                label="Stock*"
                type="number"
                v-model="form.stock"
                required
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-container v-else>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  v-model="formBanner.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image-Url*"
                  v-model="formBanner.image_url"
                  type="text"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  v-model="formBanner.status"
                  :items="items"
                  label="Status"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addProduct"
            v-if="params === 'Home'"
          >
            Save
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addBanner"
            v-else
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogAdd',
  data: () => ({
    dialog: false,
    form: {
      name: '',
      imageUrl: '',
      stock: '',
      price: ''
    },
    formBanner: {
      title: '',
      status: '',
      image_url: ''
    },
    formBannerEmpty: {
      title: '',
      status: '',
      image_url: ''
    },
    formEmpty: {
      name: '',
      imageUrl: '',
      stock: '',
      price: ''
    },
    items: ['ACTIVE', 'INACTIVE']
  }),
  methods: {
    addProduct () {
      this.dialog = false
      this.$store.dispatch('addProduct', this.form)
      this.form = Object.assign({}, this.formEmpty)
    },
    addBanner () {
      this.dialog = false
      this.$store.dispatch('addBanner', this.formBanner)
      this.formBanner = Object.assign({}, this.formBannerEmpty)
    }
  },
  computed: {
    params () {
      return this.$route.name
    }
  },
  created () {
    console.log(this.$route.name, 'Dialog Add')
  }
}
</script>

<style>

</style>
