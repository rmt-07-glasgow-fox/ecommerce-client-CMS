<template>
    <div>
        <div id="edit">
            <div id="edit-box" class="col-4 mx-auto">
                <div id="title-form">
                    <h1 style="margin-top: 30px; margin-left: 15%;"><b>edit Product</b></h1>
                </div>
                <form @submit.prevent="editProduct" class="d-flex flex-column">
                    <div id="form-edit">
                        <label for="name" id="form-label">name</label>
                        <input v-model="name" type="text" id="form-input" placeholder="example:  sepatu">
                    </div>
                    <div id="form-edit">
                        <label for="price" id="form-label">price</label>
                        <input v-model="price" type="text" id="form-input" placeholder="example:  10000">
                    </div>
                    <div id="form-edit">
                        <label for="stock" id="form-label">stock</label>
                        <input v-model="stock" type="text" id="form-input" placeholder="example:  50">
                    </div>
                    <div id="form-edit">
                        <label for="imageUrl" id="form-label">image url</label>
                        <input v-model="imageUrl" id="form-input" placeholder="example:  http://image.jpg">
                    </div>
                    <div id="form-edit">
                        <label for="category" id="form-label">category</label>
                        <select v-model="category" id="form-input">
                          <option selected>choose category</option>
                          <option value="rumah tangga">rumah tangga</option>
                          <option value="makanan">makanan</option>
                          <option value="fashion">fashion</option>
                          <option value="elektronik">elektronik</option>
                          <option value="other">other</option>
                        </select>
                    </div>
                    <button class="shadow-lg" type="submit" id="btn-edit">edit</button>
                    <p @click="backHome" id="backToHome">Home</p>
                </form>
            </div>
            <p></p>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      imageUrl: '',
      category: ''
    }
  },
  methods: {
    backHome () {
      this.$router.push({ path: '/' })
    },
    errorMessage (errorMessage) {
      Swal.fire({
        title: errorMessage,
        icon: 'error',
        confirmButtonText: 'back'
      })
    },
    editProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        imageUrl: this.imageUrl,
        category: this.category,
        id: this.$route.params.id
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/' })
          this.$store.dispatch('fetchProduct')
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    },
    getProductById () {
      const productId = this.$route.params.id
      this.$store.dispatch('getProductById', productId)
        .then(({ data }) => {
          this.name = data.name
          this.stock = data.stock
          this.price = data.price
          this.imageUrl = data.imageUrl
          this.category = data.category
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    }
  },
  computed: {
  },
  created () {
    this.getProductById()
  }
}
</script>

<style>
  #edit {
    height: 600px;
  }
  #edit-box {
    width: 400px;
    margin-top: 40px;
    height: 710px;
    background-color: rgb(243, 242, 242);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  #form-edit {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10%;
    width: 60%;
    margin-left: 17%;
  }
  #form-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }
  #form-input {
    margin-top: 10px;
    font-family: inherit;
    width: 110%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1rem;
    color:black;
    padding: 7px 7px;
    background: rgb(219, 219, 219);
    border-radius: 5px;
  }
  #btn-edit {
    margin-top: 40px;
    width: 30%;
    height: 50px;
    margin-left: 35%;
    outline: none;
    border-radius: 5px;
    font-size: 1.5rem;
    border: 0;
    background-color: black;
    color: white;
  }
  #btn-edit:hover {
    background-color: transparent;
    color: black;
    outline: none;
    transition: 0.5s;
  }
  #backToHome {
    width: 50px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 43.5%;
  }
  #backToHome:hover {
    opacity: 0.6;
  }
</style>
