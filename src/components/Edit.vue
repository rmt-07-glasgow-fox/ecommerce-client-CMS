<template>
  <div>
        <div class="relative w-auto my-6 mx-auto max-w-3xl" style="width: 500px">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Edit
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
      <!--  -->
      <form>
      <div class="w-full mb-5 p-2 flex justify-center">
        <label class="w-1/4" for="product-name">Name</label>
        <input class="bg-gray-200 rounded p-1" type="text" v-model="product.name" id="product-name">
      </div>
      <div class="w-full mb-5 mt-5 p-2 flex justify-center">
        <label class="w-1/4" for="product-image">Image URL</label>
        <input class="bg-gray-200 rounded p-1" type="text" v-model="product.image_url" id="product-image">
      </div>
      <div class="w-full mb-5 mt-5 p-2 flex justify-center">
        <label class="w-1/4" for="product-price">Price</label>
        <input class="bg-gray-200 rounded p-1" type="number" v-model="product.price" id="product-price">
      </div>
      <div class="w-full mb-5 mt-5 p-2 flex justify-center">
        <label class="w-1/4" for="product-stock">Stock</label>
        <input class="bg-gray-200 rounded p-1" type="number" v-model="product.stock" id="product-stock">
      </div>
      <div class="w-full mb-5 p-2 flex justify-center">
        <label class="w-1/4" for="product-category">Category</label>
        <input class="bg-gray-200 rounded p-1" type="text" v-model="product.category" id="product-category">
      </div>
       <div class="flex justify-center p-2 border-t border-solid border-gray-300 rounded-b">
            <button class="text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click.prevent="toggleModal">
              Cancel
            </button>
            <button class="text-purple-600 bg-transparent hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click.prevent="updateProduct(product.id)">
              Edit
            </button>
          </div>
      </form>
       </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  components: {},
  data () {
    return {}
  },
  methods: {
    updateProduct (id) {
      this.$store.dispatch('fetchAllProducts')
      this.$store.dispatch('updateProduct', id)
      this.$emit('toggleModal')
    },
    toggleModal () {
      this.$emit('toggleModal')
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>
