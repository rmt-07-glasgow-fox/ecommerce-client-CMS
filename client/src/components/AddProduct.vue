<template>
  <div class="container d-flex flex-column flex-md-row">
    <form class="d-flex flex-column container" style="max-width: 500px" @submit.prevent="postProduct">
      <div class="my-3">
        <label for="validationDefault01" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault01"
          v-model="newProduct.name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="validationDefault02" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault02"
          v-model="newProduct.image_url"
        />
      </div>
      <div class="mb-3">
        <label for="validationDefault03" class="form-label">Price</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault03"
          v-model="newProduct.price"
          required
        />
      </div>
      <div class="mb-3">
        <label for="validationDefault04" class="form-label">Stock</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault04"
          v-model="newProduct.stock"
          required
        />
      </div>
      <div class="mb-3">
        <label for="validationDefault05" class="form-label">Category</label>
        <select
          class="form-select"
          aria-label="Default select example"
          id="validationDefault05"
          v-model="newProduct.categoryId"
          required
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <button class="btn btn-primary my-3" type="submit">Add</button>
      </div>
    </form>
    <div class="container" style="max-width: 300px">
      <h4>Category List</h4>
      <ul class="list-group list-group-flush" style="text-align: left">
        <li class="list-group-item">
          <a class="nav-link p-0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-square mx-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            Add</a
          >
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <form @submit.prevent="postCategory">
                <input type="text" class="form-control" v-model="newCat">
                <button class="btn btn-primary my-1" type="submit">Add</button>
              </form>
            </div>
          </div>
        </li>
        <li
          class="list-group-item"
          v-for="category in categories"
          :key="category.id"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill mx-1"
            viewBox="0 0 16 16"
            @click="deleteCategory(category.id)"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
            />
          </svg>
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  props: ['categories'],
  data () {
    return {
      newProduct: {
        name: null,
        image_url: null,
        price: null,
        stock: null,
        categoryId: null
      },
      newCat: ''
    }
  },
  methods: {
    postProduct () {
      this.$emit('postProduct', this.newProduct)
    },
    postCategory () {
      this.$emit('postCategory', this.newCat)
      this.newCat = ''
    },
    deleteCategory (id) {
      this.$emit('deleteCategory', id)
    }
  }
}
</script>

<style>
</style>
