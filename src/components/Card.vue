<template>
<div>
  <div class="card p-2 m-3 shadow-md rounded">
    <img class="" :src="product.image_url" style="height: 400px; max-width: 267px;">
    <div class="p-2">
      <h4 class="text-purple-900 font-medium">{{ product.name }}</h4>
      <p class="text-gray-700 font-light text-sm">Rp {{ formatRp(product.price) }}</p>
      <p class="text-gray-700 font-light text-sm">Stok: {{ product.stock }}</p>
    </div>
    <div class="flex w-full flex flex-row flex-wrap justify-center items-center">
      <a class="m-2 px-2 text-gray-800 font-bold hover:text-purple-800 active:bg-purple-600" href="#" @click.prevent="toggleModal">edit</a>
      <a class="m-2 px-2 text-gray-600 font-bold hover:text-purple-400 active:bg-purple-600" href="#" @click.prevent="deleteProduct(product.id)">delete</a>
    </div>
  </div>
   <!-- MODAL -->
     <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
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
            <Edit
            @toggleModal="toggleModal"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
</div>
</template>

<script>
import Edit from './Edit'

export default {
  name: 'Card',
  props: ['product'],
  components: {
    Edit
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    populateProduct (id) {
      this.$store.dispatch('populateProduct', id)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    formatRp (value) {
      return value.toLocaleString('id-ID')
    },
    toggleModal () {
      this.$store.dispatch('fetchAllProducts')
      this.$store.commit('populateProduct', this.product)
      this.showModal = !this.showModal
    }
  }
}
</script>
