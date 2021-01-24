<template>
  <div>
    <div class="row">
      <div class="col-2 left-nav" style="background-color:rgba(80, 81, 82,0.5)">
        <div id="nav">
          <div style="padding:16px">
            <h3>E-Shop-E</h3>
          </div>
          <div class="links">
            <router-link to="/">Home</router-link>
          </div>
          <div class="links">
            <router-link to="/addproduct">Add Product</router-link>
          </div>
          <div style="padding:16px">
            <button v-on:click="logout" class="btn btn-outline-danger">Logout</button>
          </div>
        </div>
      </div>
      <div class="col-10">
        <div class="container border shadow p-3 mb-5 bg-white rounded">
          <h1>Add Product</h1>
          <div>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Product Name</label>
                <input v-model="name" type="email" class="form-control" id="email" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Image URL</label>
                <input v-model="image_url" type="text" class="form-control" id="password">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input v-model="price" type="number" class="form-control" id="price">
              </div>
              <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input v-model="stock" type="number" class="form-control" id="stock">
              </div>
                <button v-on:click.prevent="addproduct" type="submit" class="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addproduct () {
      const user = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addproduct', user)
        .then((data) => {
          this.$router.push('/')
        })
        .catch(err => {
          this.$swal(err.response.data.errors[0])
        })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  padding: 20px;
  height: 500px;
  width: 350px;
}

.left-nav{
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-right: 0;
  padding-top: 12px;
  position: relative;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav .links {
  padding-top: 16px;
  padding-bottom: 16px;
}

#nav .links:hover:not(.active) {
  background-color: #555;
  color: white;
}

</style>
