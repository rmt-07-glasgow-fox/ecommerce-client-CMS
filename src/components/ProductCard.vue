<template>
  <div class="row mb-3">
    <div class="col-3 d-flex justify-content-center align-items-center">
      <div><img :src="product.image_url" width="100px" height="100px"></div>
    </div>
    <div class="col-7 text-left d-flex justify-content-between align-items-center">
      <div class="col-5 product-name">{{product.name}}</div>
      <div class="col-4"><i class="fas fa-donate"></i> {{price}}</div>
      <div class="col-3"><i class="fab fa-dropbox"></i> {{product.stock}}</div>
    </div>
    <div class="col-2 d-flex justify-content-center align-items-center">
      <button class="btn btn-dark btn-sm" @click="editProduct"><i class="fas fa-pen"></i> Edit</button >
      <button class="btn btn-danger btn-sm ml-2" @click="deleteProduct(product.id)"><i class="fas fa-trash"></i> Delete</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapState } from 'vuex'

export default {
  props: ['product'],
  data () {
    return {

    }
  },
  methods: {
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteProduct', id)
        }
      })
    },
    async editProduct () {
      const { value: product } = await Swal.fire({
        title: 'Edit Product',
        html: `
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-briefcase"></i></label>
          <div class="col-sm-11">
            <input type="text" class="form-control" id="name" value="${this.product.name}">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-donate"></i></label>
          <div class="col-sm-11">
            <input type="number" class="form-control" id="price" value="${this.product.price}">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fab fa-dropbox"></i></label>
          <div class="col-sm-11">
            <input type="number" class="form-control" id="stock" value="${this.product.stock}">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-1 col-form-label"><i class="fas fa-toggle-on"></i></label>
          <div class="col-sm-11">
            <select class="form-control" id="CategoryId">
              <option value="">select category</option>
              ${this.categories.map(e => `<option value="${e.id}" ${this.product.CategoryId === e.id ? 'selected' : ''}>${e.name}</option>`)}
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-image"></i></label>
          <div class="col-sm-11">
            <textarea type="number" class="form-control" id="image_url" rows="5">${this.product.image_url}</textarea>
          </div>
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('name').value,
            document.getElementById('price').value,
            document.getElementById('stock').value,
            document.getElementById('image_url').value,
            document.getElementById('CategoryId').value
          ]
        }
      })

      if (product) {
        const [name, price, stock, imageUrl, CategoryId] = product
        const payload = {
          id: this.product.id,
          name,
          price,
          stock,
          image_url: imageUrl,
          CategoryId
        }
        this.$store.dispatch('editProduct', payload)
      }
    }
  },
  computed: {
    price () {
      return this.product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' })
    },
    ...mapState([
      'categories'
    ])
  }
}
</script>

<style scoped>
  .product-name{
    font-size: 1.2em;
    font-weight: 800;
  }
</style>
