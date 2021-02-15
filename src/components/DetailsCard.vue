<template>
  <div class="w-1/2 flex-col items-center bg-transparent">
    <div v-if="!showEdit">
      <h1 class="py-20 text-xl no-underline font-bold  text-green-400">
      {{ product.name }}
      </h1>
      <div class="no-underline text-white">
        <p class="py-2 text-sm font-bold"><span class="text-purple-400 font-semibold mr-1">Price: </span> {{ product.price }}</p>
        <p class="py-2 text-sm font-bold"><span class="text-purple-400 font-semibold mr-1">Stock: </span> {{ product.stock }}</p>
        <p class="py-2 text-sm font-bold"><span class="text-purple-400 font-semibold mr-1">Status: </span> {{ product.status }}</p>
      </div>
      <div class="py-12 flex flex-col items-center">
        <button @click="goEdit" role="button" class="py-1 px-1 ml-2 focus:outline-none font-bold text-green-400 w-20">Edit</button>
        <button @click="goDelete" role="button" class="py-1 px-1 ml-2 focus:outline-none font-bold text-red-400 w-20">Delete</button>
      </div>
    </div>
    <div v-if="showEdit">
      <edit-card
      @goDetails="goDetails"
      :product="product"
      ></edit-card>
    </div>
  </div>
</template>

<script>
import EditCard from './EditCard.vue'
export default {
  components: { EditCard },
  name: 'DetailsCard',
  data () {
    return {
      showEdit: false
    }
  },
  props: ['product'],
  methods: {
    goEdit () {
      this.showEdit = !this.showEdit
    },
    goDetails () {
      this.$emit('goDetails')
    },
    goDelete () {
      this.$swal.fire({
        title: `Delete ${this.product.name}?`,
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F87171',
        closeOnConfirm: false,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Back'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteProduct', this.product.id).catch(err => {
            this.$swal({
              icon: 'warning',
              text: err.message
            })
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
