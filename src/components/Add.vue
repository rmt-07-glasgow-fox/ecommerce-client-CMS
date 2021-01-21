<template>
  <div>
    <div>
      <form>
      <div class="mb-5 mt-3 p-2 flex justify-center">
        <label class="w-1/4" for="product-name">Name</label>
        <input class="bg-gray-200 rounded p-1" type="text" v-model="product.name" id="product-name">
      </div>
      <div class="w-full mb-5 flex justify-center">
        <label class="w-1/4" for="product-image">Image URL</label>
        <input class="bg-gray-200 rounded p-1" type="text" v-model="product.image_url" id="product-image">
      </div>
      <div class="w-full mb-5 flex justify-center">
        <label class="w-1/4" for="product-price">Price</label>
        <input class="bg-gray-200 rounded p-1" type="number" v-model="product.price" id="product-price">
      </div>
      <div class="w-full mb-5 flex justify-center">
        <label class="w-1/4" for="product-stock">Stock</label>
        <input class="bg-gray-200 rounded p-1" type="number" v-model="product.stock" id="product-stock">
      </div>
      <div class="flex items-center p-2 border-t border-solid border-gray-300 rounded-b">
            <button class="text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click.prevent="toggleModal">
              Cancel
            </button>
            <button class="text-purple-600 bg-transparent hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click.prevent="addProduct">
              Add New Product
            </button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Add',
  components: {},
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.toggleModal()
      this.$store.dispatch('addProduct', this.product)
    },
    toggleModal () {
      this.$store.dispatch('fetchAllProducts')
      this.$emit('toggleModal')
    }
  }
}
</script>
