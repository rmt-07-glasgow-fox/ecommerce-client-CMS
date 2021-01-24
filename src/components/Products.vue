<template>
<b-container fluid class="mt-3">
  <div class="card bg-dark shadow" v-if="!addForm">
    <div class="card-header py-3">
      <h3 class="text-white text-center">Products</h3>
      <a href="#" @click.prevent="showAddForm" class="btn btn-warning"> <font-awesome-icon icon="plus-circle" /> Add Product</a>
    </div>
    <div class="card-body">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <p class="mt-3 text-white">Current Page: {{ currentPage }}</p>
      <b-table
        text-center
        dark striped
        id="my-table"
        :items="getAllProducts"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
      >
        <template #cell(No)="data">
          {{ data.index + 1 }}
        </template>

        <template #cell(image)="data">
          <img width="90px" height="90px" :src="data.item.image">
        </template>

        <template #cell(actions)="data">
          <a class="text-white" href="" @click.prevent="editProduct(data.item.id)"><font-awesome-icon class="mr-4" icon="edit"/></a>
          <a class="text-white" href="" @click.prevent="deleteProduct(data.item.id)"><font-awesome-icon icon="trash"/></a>
        </template>
      </b-table>
    </div>
  </div>
  <transition name="slide-fade">
    <product-form :productId="productId"
    :edit="edit"
    @showAddForm="showAddForm"
    v-if="addForm"/>
  </transition>
</b-container>
</template>

<script>
import ProductForm from '../components/ProductForm.vue'
export default {
  components: { ProductForm },
  data () {
    return {
      addForm: false,
      product: null,
      edit: false,
      productId: null,
      items: this.getAllProducts,
      perPage: 5,
      currentPage: 1,
      fields: [
        'No',
        'name',
        'price',
        'stock',
        'image',
        'Actions'
      ]
    }
  },
  computed: {
    getAllProducts () {
      return this.$store.state.products
    },
    rows () {
      return this.getAllProducts.length
    }
  },
  methods: {
    fetchAllProducts () {
      this.$store.dispatch('getAllProducts')
    },
    showAddForm () {
      this.fetchAllProducts()
      this.addForm = !this.addForm
      this.edit = false
    },
    editProduct (productId) {
      this.productId = productId
      this.edit = true
      console.log('masukk')
      this.addForm = !this.addForm
    },
    async deleteProduct (productId) {
      try {
        await this.$store.dispatch('deleteProduct', productId)
        this.successDelete()
      } catch (err) {
        console.log(err)
      }
    },
    successDelete () {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        icon: 'success',
        title: 'Success'
      }).then(() => {
        this.fetchAllProducts()
      })
    }
  },
  created () {
    this.fetchAllProducts()
  }
}
</script>

<style>
a {
  text-decoration: none;
  text-decoration-color: white;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
