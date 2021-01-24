<template>
 <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="btn-edit"
          text
          v-bind="attrs"
          v-on="on"
          @click="editItem(product, banner)"
        >
          <v-icon size="medium" class="me-2" v-if="params !== 'Home'">mdi-pencil</v-icon>
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit Product</span>
        </v-card-title>
        <v-card-text>
          <v-container
            v-if="params === 'Home'"
          >
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name*"
                  v-model="form.name"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image-Url*"
                  v-model="form.image_url"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  class="input"
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
                class="input"
                label="Stock*"
                type="number"
                v-model="form.stock"
                required
              >
              </v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
              <v-text-field
                label="Category*"
                type="text"
                v-model="form.Category"
                required
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-container
            v-else
          >
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  v-model="formBanner.title"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Image-Url*"
                  v-model="formBanner.image_url"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  :items="items"
                  label="Status"
                  v-model="formBanner.status"
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
            @click.prevent="editProduct"
            v-if="params === 'Home'"
          >
            Save
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click.prevent="editBanner"
            v-else
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'DialogEdit',
  data () {
    return {
      dialog: false,
      form: {
        name: '',
        price: '',
        stock: '',
        image_url: '',
        id: '',
        Category: ''
      },
      formBanner: {
        title: '',
        image_url: '',
        status: ''
      },
      items: ['ACTIVE', 'INACTIVE']
    }
  },
  props: ['product', 'banner'],
  methods: {
    editItem (product, banner) {
      if (this.params === 'Home') {
        this.form = Object.assign({}, product)
      } else {
        this.formBanner = Object.assign({}, banner)
        console.log(this.formBanner.status)
      }
    },
    editProduct () {
      this.dialog = false
      this.$store.dispatch('editProduct', this.form)
    },
    editBanner () {
      this.dialog = false
      this.$store.dispatch('editBanner', this.formBanner)
    }
  },
  computed: {
    params () {
      return this.$route.name
    }
  },
  created () {
    console.log(this.$route.name)
  }
}
</script>

<style>
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .btn-edit{
    margin: 0 !important;
  }
</style>
