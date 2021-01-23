<template>
<div class="container mt-4">
  <div class="row  justify-content-center">
    <div class="col-6">
      <b-card bg-variant="dark" text-variant="white">
        <h1>Add New Product</h1>
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
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          @change="onFileChange"
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <div class="container" v-if="image">
          <img :src="image" width="400px" height="300px" />
        </div>
        <b-button :disabled="isDisabled" class="mt-2" type="submit" variant="light">Submit</b-button>
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
      file: null
    }
  },
  computed: {
    isDisabled () {
      return !this.image
    }
  },
  methods: {
    async onSubmit () {
      try {
        const payload = {
          name: this.form.name,
          price: this.form.price,
          stock: this.form.stock,
          imageUrl: this.form.imageUrl
        }
        const response = await this.$store.dispatch('addNewProduct', payload)
        console.log(response)
        this.$router.push({ path: '/dashboard' })
      } catch (err) {
        console.log(err)
      }
    },
    async onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
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
