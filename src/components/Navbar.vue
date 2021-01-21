<template>
 <nav
    class="absolute top-0 left-0 w-full z-10 bg-gray-400 md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 mb-10"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a href="#" @click.prevent="redirectHome">
        <img src='https://www.flaticon.com/svg/vstatic/svg/249/249614.svg?token=exp=1611176235~hmac=a80b24e16cc39d2c8a68123cea7aa0af' style="width: 32px" class="mr-3" alt="">
      </a>
      <a class="text-white text-sm uppercase hidden lg:inline-block font-semibold hover:text-gray-300"
        href="#"
        @click.prevent="redirectProducts">Products</a>
      <!-- Form -->
      <div
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
         <a class="text-gray-200 hover:text-gray-300 text-sm uppercase hidden lg:inline-block font-semibold px-10" href="#" @click.prevent="toggleModal">Add Product</a>
        <a class="text-gray-200 hover:text-gray-300 text-sm uppercase hidden lg:inline-block font-semibold px-10" href="#" @click.prevent="logout">Logout</a>
      </div>
      <!-- User -->
      <ul
        class="flex-col md:flex-row list-none items-center hidden md:flex"
      >
      </ul>
    </div>
    <!-- MODAL -->
     <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Add new product
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-1 flex-auto">
            <Add
            @toggleModal="toggleModal"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import Add from './Add'

export default {
  name: 'Navbar',
  components: {
    Add
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    ...mapActions([
      'addProduct',
      'redirectProducts',
      'redirectHome',
      'logout'
    ]),
    toggleModal () {
      this.$store.dispatch('fetchAllProducts')
      this.showModal = !this.showModal
    }
  }
}
</script>
