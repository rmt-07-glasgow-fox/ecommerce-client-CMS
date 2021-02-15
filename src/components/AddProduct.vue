<template>
  <div id="addProduct">
    <h1 class="py-2 text-xl no-underline font-bold  text-green-400">
    Add Product
    </h1>
    <div class="w-full pr-2">
      <form @submit.prevent="addProduct">
        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >Name</label
          >
          <input
            v-model="addName"
            type="text"
            class="block appearance-none w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
            placeholder="product name"
          />
        </div>

        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >Image URL</label
          >
          <input
            v-model="addUrl"
            type="text"
            class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
            placeholder="product url"
          />
        </div>

        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >Price</label
          >
          <input
            v-model="addPrice"
            type="text"
            class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
            placeholder="product price"
          />
        </div>

        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >Stock</label
          >
          <input
            v-model="addStock"
            type="text"
            class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
            placeholder="product stock"
          />
        </div>

        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >Category</label
          >
          <select
            v-model="addCategoryId"
            class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
          >
          <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id">{{ category.name }}</option>
          </select>
        </div>

        <div class="mt-3 ml-6 flex justify-center items-center">
          <button type="submit" class="bg-transparent text-green-400 font-bold py-2 px-4">
            Add
          </button>
          <button type="button"
          @click.prevent="cancelAdd"
          class="bg-transparent text-red-400 font-bold py-2 px-4">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      addName: '',
      addUrl: '',
      addStock: '',
      addPrice: '',
      addCategoryId: ''
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', {
        name: this.addName,
        url: this.addUrl,
        stock: this.addStock,
        price: this.addPrice,
        CategoryId: this.addCategoryId
      }).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
    },
    cancelAdd () {
      this.$router.push('/products')
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
