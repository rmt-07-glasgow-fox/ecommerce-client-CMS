<template>
  <tbody>
    <tr v-if="editMode === false">
      <th id="middle" scope="row">{{ product.id }}</th>
      <td class="w-25">
        <img
          :src="product.image_url"
          class="img-fluid img-thumbnail"
          :alt="product.name"
          id="image-table"
          @click="uploadImage"
        />
      </td>
      <td id="middle">{{ product.name }}</td>
      <td id="middle">{{ product.description }}</td>
      <td id="middle">{{ getCategoryName() }}</td>
      <td id="middle">
        {{
          product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </td>
      <td id="middle">{{ product.stock }}</td>
      <td id="middle">
        <button
          class="btn btn-sm rounded-0 btn-success"
          type="button"
          @click="edit()"
          title="delete"
          style="color: white; float: right"
        >
          <i class=""></i>Modify
        </button>
      </td>
    </tr>

    <tr v-if="editMode === true">
      <th id="middle" scope="row">{{ productId }}</th>
      <td class="w-25">
        <img
          :src="image_url"
          class="img-fluid img-thumbnail"
          :alt="productName"
          id="edit-image"
          @click="editImage"
        />
      </td>
      <td id="middle">
        <textarea v-model="productName" rows="5" cols="11" style="border: groove"></textarea>
      </td>
      <td id="middle">
        <textarea v-model="description" rows="5" cols="55" style="border: groove"></textarea>
      </td>
      <td id="middle">
        <select
          v-model="categoryId"
          id="category-edit"
          style="width: auto; border: inset"
          aria-label="category-edit"
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
        <hr />
        <button
          class="btn btn-success btn-sm rounded-0"
          type="button"
          style="width: 56px"
          @click="patchProduct"
          title="Edit"
        >
          Patch
        </button>
      </td>
      <td id="middle"><input v-model="price" style="width: 5em; border: groove" />
      <hr />
      in USD
      </td>
      <td id="middle"><input v-model="stock" style="width: 2em; border: groove" />
      <hr />
      @
      </td>
      <td id="middle">
        <button
          class="btn btn-success btn-sm rounded-0"
          type="button"
          style="width: 60px"
          @click="updateProduct"
          title="Edit"
        >
          Update
        </button>
        <button
          class="btn btn-danger btn-sm rounded-0"
          type="button"
          style="width: 60px"
          title="cancel"
          @click="delProduct(product.id)"
        >
          Delete
        </button>
        <hr />
        <button
          class="btn btn-danger btn-sm rounded-0"
          type="button"
          style="width: 60px"
          title="cancel"
          @click="cancelEdit"
        >
          <i class="bi bi-trash"></i>Cancel
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Table',
  props: ['product'],
  data () {
    return {
      editMode: false,
      productName: '',
      image_url: '',
      description: '',
      categoryId: 0,
      price: 0,
      stock: 0,
      productId: 0
    }
  },
  methods: {
    getCategoryName () {
      const out = this.categories.find((x) => x.id === this.product.categoryId)
        .name
      return out
    },
    edit () {
      this.productName = this.product.name
      this.image_url = this.product.image_url
      this.description = this.product.description
      this.categoryId = this.product.categoryId
      this.price = this.product.price
      this.stock = this.product.stock
      this.productId = this.product.id
      this.editMode = true
    },
    updateProduct () {
      this.$store.dispatch('updateProduct', {
        id: this.productId,
        name: this.productName,
        image_url: this.image_url,
        description: this.description,
        categoryId: this.categoryId,
        price: this.price,
        stock: this.stock
      })
      this.editMode = false
    },
    patchProduct () {
      this.$store.dispatch('patchProduct', {
        id: this.productId,
        categoryId: this.categoryId
      })
      this.editMode = false
    },
    delProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wont be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('delProduct', id)
        }
      })
    },
    cancelEdit () {
      this.editMode = false
    },
    setCategoryName (val) {
      this.categoryName = val
    },
    showImage () {
      Swal.fire({
        imageUrl: this.product.image_url,
        imageWidth: 600,
        imageHeight: 300,
        imageAlt: 'Custom image'
      })
    },
    editImage () {
      Swal.fire({
        title: 'Change Picture By Url',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Change',
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.image_url = result.value
          this.updateProduct()
          this.editMode = false
        }
      })
    },
    uploadImage () {
      Swal.fire({
        title: 'Select a file',
        showCancelButton: true,
        confirmButtonText: 'Upload',
        input: 'file'
      }).then((file) => {
        if (file.value) {
          console.log(file.value)
          this.$store.dispatch('uploadImage', file.value)
        }
      })
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
.container {
  padding: 2rem 0rem
}

h4 {
  margin: 2rem 0rem 1rem
}

#edit-image:hover {
  cursor: pointer;
}

#image-table:hover {
  cursor: pointer;
}
#middle {
  text-align: center;
  vertical-align: middle
}
</style>
