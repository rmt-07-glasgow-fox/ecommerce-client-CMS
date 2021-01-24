<template>
    <div>
        <div id="add">
            <div id="add-box" class="col-4 mx-auto">
                <div id="title-form">
                    <h1 style="margin-top: 30px; margin-left: 15%;"><b>Add Product</b></h1>
                </div>
                <form @submit.prevent="addProduct" class="d-flex flex-column">
                    <div id="form-add">
                        <label for="name" id="form-label">name</label>
                        <input v-model="name" type="text" id="form-input" placeholder="example:  sepatu" required>
                    </div>
                    <div id="form-add">
                        <label for="price" id="form-label">price</label>
                        <input v-model="price" type="text" id="form-input" placeholder="example:  10000" required>
                    </div>
                    <div id="form-add">
                        <label for="stock" id="form-label">stock</label>
                        <input v-model="stock" type="text" id="form-input" placeholder="example:  50" required>
                    </div>
                    <div id="form-add">
                        <label for="imageUrl" id="form-label">image url</label>
                        <input v-model="imageUrl" id="form-input" placeholder="example:  http://image.jpg" required>
                    </div>
                    <div id="form-add">
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
                    <button class="shadow-lg" type="submit" id="btn-add">add</button>
                    <p @click="backHome" id="backToHome">Home</p>
                </form>
            </div>
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
    addProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        imageUrl: this.imageUrl,
        category: this.category
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          this.errorMessage(error.response.data.message)
        })
    }
  }
}
</script>

<style>
  #add {
    height: 600px;
  }
  #add-box {
    width: 400px;
    margin-top: 40px;
    height: 710px;
    background-color: rgb(243, 242, 242);
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  #form-add {
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
  #btn-add {
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
  #btn-add:hover {
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
