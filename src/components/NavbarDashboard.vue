<template>
  <div>
    <div id="nav">
      <div class=" row d-flex justify-content-between">
        <h4 class="logo" style="color: white;"><b>Shoes Corner</b></h4>
          <div cols="8">
            <router-link to="/dashboard">Products</router-link> |
            <a href="" @click.prevent="showModal" >Add Product</a>
          </div>
          <div>
            <a href="" @click.prevent="changePage('login')" >Log out</a>
          </div>
        </div>
    </div>
    <b-modal ref="add-modal" hide-footer>
      <div class="d-block text-center">
        <h3>Add product</h3>
        <b-form @submit.prevent="addProduct()" class="mt-4">
          <b-input-group prepend="name" class="mb-2">
            <b-form-input id="inline-form-input-username"  v-model="payload.name"></b-form-input>
          </b-input-group>
          <b-input-group prepend="image url" class="mb-2">
            <b-form-input id="inline-form-input-username"  v-model="payload.image_url"></b-form-input>
          </b-input-group>
          <b-input-group prepend="price " class="mb-2">
            <b-form-input id="inline-form-input-username"   v-model="payload.price"></b-form-input>
          </b-input-group>
          <b-input-group prepend="stock" class="mb-2">
            <b-form-input id="inline-form-input-username"   v-model="payload.stock"></b-form-input>
          </b-input-group>
          <b-button class="mt-3" type="submit" variant="primary" @click="hideModal" >submit</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'NavbarLogin',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    showModal () {
      this.$refs['add-modal'].show()
    },
    addProduct () {
      this.$store.dispatch('addProduct', this.payload)
    },
    hideModal () {
      this.$refs['add-modal'].hide()
      this.$store.dispatch('getProducts')
    },
    changePage (route) {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('changePage', route)
    }
  }
}
</script>

<style>
#nav {
  padding: 30px;
  background-color: #222831;
}

#nav a {
  font-weight: bold;
  color: #4d6f91;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navigation {
  align-content: center;
}

.logo {
  font-family: 'fraunces', serif;
}

router-link {
  font-family: 'lato', serif;
}

</style>
