<template>
  <div>
    <h1 class="py-2 ml-4 text-xl no-underline font-bold  text-green-400">
    Edit Product
    </h1>
    <form @submit.prevent="editProduct">
      <div class="mt-2 ml-4">
        <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
          >Name</label
        >
        <input
          v-model="editName"
          type="text"
          class="block appearance-none w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
        />
      </div>

      <div class="mt-2 ml-4">
        <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
          >Image Url</label
        >
        <input
          v-model="editUrl"
          type="text"
          class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
        />
      </div>
      <div class="mt-2 ml-4">
        <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
          >Price</label
        >
        <input
          v-model="editPrice"
          type="text"
          class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
        />
      </div>
      <div class="mt-2 ml-4">
        <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
          >Stock</label
        >
        <input
          v-model="editStock"
          type="text"
          class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
        />
      </div>
      <div class="mt-2 ml-4">
        <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
          >Category</label
        >
        <select
          v-model="editCategoryId"
          class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
        >
        <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"> {{ category.name }} </option>
        </select>
      </div>
      <div class="mt-2 ml-5 flex justify-center">
        <button type="submit" class="bg-transparent text-green-400 font-bold py-2 px-4">
          Edit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditCard',
  data () {
    return {
      editName: '',
      editUrl: '',
      editPrice: '',
      editStock: '',
      editCategoryId: ''
    }
  },
  props: ['product'],
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', {
        id: this.product.id,
        data: {
          name: this.editName,
          url: this.editUrl,
          price: this.editPrice,
          stock: this.editStock,
          CategoryId: this.editCategoryId
        }
      }).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      }).finally(_ => {
        this.$emit('goDetails')
      })
    },
    goCancel () {
      this.$router.push('/products')
    }
  },
  created () {
    this.editName = this.product.name
    this.editUrl = this.product.url
    this.editPrice = this.product.price
    this.editStock = this.product.stock
    this.editCategoryId = this.product.CategoryId
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
