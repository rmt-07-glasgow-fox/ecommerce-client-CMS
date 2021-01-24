<template>
 <nav
    class="absolute top-0 left-0 w-full z-10 bg-gray-400 md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 mb-10"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a href="#" @click.prevent="redirectHome">
        <img src='../assets/triangles.png' style="width: 25px" class="mr-3" alt="">
      </a>
      <a class="text-white text-sm uppercase hidden lg:inline-block font-semibold hover:text-gray-300"
        href="#"
        @click.prevent="redirectBanners"
        v-if="isProductPage">Banners</a>
       <a class="text-white text-sm uppercase hidden lg:inline-block font-semibold hover:text-gray-300"
        href="#"
        @click.prevent="redirectProducts"
        v-if="!isProductPage">Products</a>
      <!-- Form -->
      <div
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
         <a class="text-gray-200 hover:text-gray-300 text-sm uppercase hidden lg:inline-block font-semibold px-10" href="#" @click.prevent="toggleModal"
         v-if="isProductPage">Add Product</a>
        <a class="text-gray-200 hover:text-gray-300 text-sm uppercase hidden lg:inline-block font-semibold px-10" href="#" @click.prevent="toggleModalBanner"
        v-if="!isProductPage">Add Banner</a>
        <a class="text-gray-200 hover:text-gray-300 text-sm uppercase hidden lg:inline-block font-semibold px-10" href="#" @click.prevent="logout">Logout</a>
      </div>
      <!-- User -->
      <ul
        class="flex-col md:flex-row list-none items-center hidden md:flex"
      >
      </ul>
    </div>
    <!--MODAL ADD PRODUCT -->
     <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--body-->
          <div class="relative p-1 flex-auto">
            <Add
            @toggleModal="toggleModal"/>
          </div>
          </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    <!--MODAL ADD BANNER -->
    <div v-if="showModalBanner" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--body-->
          <div class="relative p-1 flex-auto">
            <AddBanner
            @toggleModalBanner="toggleModalBanner"/>
          </div>
          </div>
    </div>
    <div v-if="showModalBanner" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import Add from './Add'
import AddBanner from './AddBanner'

export default {
  name: 'Navbar',
  components: {
    Add,
    AddBanner
  },
  data () {
    return {
      showModal: false,
      showModalBanner: false
    }
  },
  methods: {
    ...mapActions([
      'addProduct',
      'redirectBanners',
      'redirectProducts',
      'redirectHome',
      'logout'
    ]),
    toggleModal () {
      this.$store.dispatch('fetchAllProducts')
      this.showModal = !this.showModal
    },
    toggleModalBanner () {
      this.$store.dispatch('fetchAllBanners')
      this.showModalBanner = !this.showModalBanner
    }
  },
  computed: {
    isProductPage () {
      return this.$store.state.isProductPage
    }
  }
}
</script>
