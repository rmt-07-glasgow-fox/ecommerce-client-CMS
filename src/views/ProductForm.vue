<template>
  <div>
    <div id="bar" class="d-flex align-center">
      <v-btn class="ma-2 mr-auto" color="accent" dark @click="$router.go(-1)">
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>
    </div>
    <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <form action="post" @submit.prevent="submit">
        <v-card ref="form">
          <v-card-title>
            <div class="justify-center accent--text">
              <h3 v-if="!isEdit">Create New Product</h3>
              <h3 v-if="isEdit">Edit Product</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="product.name"
              label="Name"
              placeholder="Adidas Cloth"
            ></v-text-field>
            <v-text-field
              ref="image_url"
              v-model="product.image_url"
              label="Image Url"
              placeholder="http://image.jpg"
            ></v-text-field>
            <v-text-field
              ref="price"
              v-model="product.price"
              label="Price"
              type="number"
              placeholder="120000"
            ></v-text-field>
            <v-text-field
              ref="stock"
              v-model="product.stock"
              label="Stock"
              type="number"
              placeholder="120000"
            ></v-text-field>
            <v-select
              v-model="product.Category"
              :items="categories"
              item-text="name"
              item-value="id"
              label="Category Name"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="$router.go(-1)">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              v-if="!isEdit"
              class="ma-2"
              color="warning"
              outlined
              @click="clear"
            >
              clear<v-icon right>mdi-refresh</v-icon>
            </v-btn>
            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              type="submit"
            >
              <span v-if="!isEdit">ADD<v-icon right>mdi-plus-circle</v-icon></span>
              <span v-if="isEdit">EDIT<v-icon right>mdi-pencil-circle</v-icon></span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    clear () {
      this.product.name = ''
      this.product.image_url = ''
      this.product.price = ''
      this.product.stock = ''
      this.product.Category = ''
    },
    submit () {
      if (this.isEdit) {
        const productId = this.$route.params.id
        this.product.CategoryId = this.product.Category.id
        this.$store.dispatch('updateProduct', {
          id: productId,
          data: this.product
        }, { root: true })
      } else {
        this.$store.dispatch('createProduct', { product: this.product, selectedCategory: this.product.Category }, { root: true })
      }
    },
    getOneProduct () {
      if (this.isEdit) {
        const productId = this.$route.params.id
        this.$store.dispatch('getOneProduct', productId, { root: true })
      }
    },
    getAllCategories () {
      this.$store.dispatch('getAllCategories')
    }
  },
  computed: {
    isEdit () {
      return this.currentRouteName === 'Edit Product'
    },
    currentRouteName () {
      return this.$route.name
    },
    ...mapState({
      product: state => state.mProducts.product,
      categories: state => state.mCategories.categories
    })
  },
  created () {
    this.getAllCategories()
    this.currentRouteName === 'Edit Product' &&
      this.getOneProduct()
    this.currentRouteName !== 'Edit Product' &&
      this.clear()
  },
  beforeDestroy () {
    this.clear()
  }
}
</script>

<style>

</style>
