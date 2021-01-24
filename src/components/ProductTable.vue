<template>
  <table class="table my-4">
      <thead class="thead-dark">
        <tr>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center" style="width: 30%">Name</th>
          <th scope="col" class="text-center">Image</th>
          <th scope="col" class="text-center">Price</th>
          <th scope="col" class="text-center">Stock</th>
          <th scope="col" class="text-center">
            Category
            <span class="dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
              </span>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="updateCategoryId(0)"
              >All
              </a>
              </li>
              <li><a class="dropdown-item" href="#"
              v-for="category in categories"
              :key="category.id"
              @click="updateCategoryId(category.id)"
              >{{ category.name }}
              </a>
              </li>
            </ul>
          </th>
          <th scope="col" class="text-center">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" :key="product.id">
          <th scope="row" class="align-middle">{{ index+1 }}</th>
          <td class="align-middle ">{{product.name}}</td>
          <td class="align-middle text-center"><img :src="product.image_url" alt="" style="width: 50px" class="p-0"></td>
          <td class="align-middle text-end">{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}}</td>
          <td class="align-middle text-center">{{product.stock}}</td>
          <td class="align-middle text-center">{{product.Category.name}}</td>
          <td class="align-middle text-center">
            <button class="btn btn-primary mx-1"
              @click="editProduct(product.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              Edit
              </button>
            <button class="btn btn-danger mx-1" @click.prevent="deleteProduct(product.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              Delete
              </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: 'ProductTable',
  props: ['productList', 'categories'],
  methods: {
    editProduct (id) {
      this.$router.push({ path: `/products/${id}/edit` })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    updateCategoryId (id) {
      // console.log('mau update category id ke ', id)
      this.$store.commit('updateChosenCategoryId', id)
    }
  }
}
</script>

<style>

</style>
