<template>
<div class="container ml-0 mt-4">
  <div class="row">
    <div class="col-6">
      <b-card bg-variant="dark" text-variant="white">
        <a href="#" @click.prevent="showProductForm" class="btn btn-warning"> <font-awesome-icon icon="arrow-circle-left" /> Produst List</a>
        <h1 class="mt-2">{{ edit ? 'Edit' : 'Add New' }} Product</h1>
        <b-form @submit.prevent="onSubmit" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Product name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Price:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.price"
          type="number"
          placeholder="Product Price"
          required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Stock:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.stock"
          placeholder="Product Stock"
          required
          ></b-form-input>
        </b-form-group>

          <b-form-file
          v-if="!edit || imgForm"
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          @change="onFileChange"
        ></b-form-file>
        <div v-if="!edit || imgForm" class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <div class="container" v-if="image || edit">
          <a v-if="!imgForm" class="text-white" @click.prevent="showImgForm" href="">Change Image <font-awesome-icon icon="times" /></a>
          <img v-if="showImage" :src="image" width="400px" height="300px" />
        </div>
        <b-button
        :disabled="isDisabled"
        class="mt-2"
        type="submit"
        variant="light"
        >{{ edit ? 'Update' : 'Submit' }}</b-button>
        </b-form>
      </b-card>
   </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        name: '',
        price: '',
        stock: null,
        imageUrl: ''
      },
      image: null,
      show: true,
      file: null,
      imgForm: false,
      showImage: true
    }
  },
  computed: {
    isDisabled () {
      if (!this.edit) {
        return !this.image
      } else {
        if (!this.form.name || !this.form.price || !this.form.stock || !this.form.imageUrl) {
          return true
        } else {
          return false
        }
      }
    },
    product () {
      return this.$store.state.product
    }
  },
  props: ['productId', 'edit'],
  async created () {
    if (this.edit) {
      await this.$store.dispatch('getProductById', this.productId)
      this.form.name = this.product.name
      this.form.price = this.product.price
      this.form.stock = this.product.stock
      this.image = this.product.imageUrl
    }
  },
  methods: {
    showProductForm () {
      this.$emit('showAddForm')
    },
    showImgForm () {
      this.showImage = false
      this.imgForm = true
    },
    async onSubmit () {
      try {
        const payload = {
          name: this.form.name,
          price: this.form.price,
          stock: this.form.stock,
          imageUrl: this.form.imageUrl
        }
        if (this.edit) {
          payload.id = this.productId
          const response = await this.$store.dispatch('editProduct', payload)
          console.log(response)
        } else {
          const response = await this.$store.dispatch('addNewProduct', payload)
          console.log(response)
        }
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          icon: 'success',
          title: 'Success'
        }).then(() => {
          this.loading = false
          this.showProductForm()
        })
      } catch (err) {
        console.log(err)
      }
    },
    async onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      console.log(files[0])
      if (!files.length) return
      const body = new FormData()
      body.set('key', '194d79d58080fb78f4dbfc6beae0c454')
      body.append('image', files[0])
      console.log(body)
      const response = await axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
      })
      console.log(response, 'resp<<<')
      this.form.imageUrl = response.data.data.image.url
      this.createImage(files[0])
      this.showImage = true
    },
    createImage (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style>
  body {
    background-color: black;
  }
</style>
