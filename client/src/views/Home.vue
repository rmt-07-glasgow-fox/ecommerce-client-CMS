<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light justify-content-between ">
      <a class="navbar-brand"></a>
      <a class="navbar-brand">Admin</a>
      <form class="form-inline">
        <button @click.prevent="logout" class="btn btn-outline-danger my-2 my-sm-0">Logout</button>
      </form>
    </nav>
    <div id="home-content" class="col-12 row" style="margin-bottom:20px">
      <div id="tab-category">
        <div id="tab-category-content">
          <button @click="addProduct()">Add Product</button>
          <div id="title-category">
            <h4>category</h4>
          </div>
          <p @click="fetchProductByCategory('all')">all ({{ allProducts.length }})</p>
          <p @click="fetchProductByCategory('fashion')">fashion ({{ filteredCategoryFashion.length }})</p>
          <p @click="fetchProductByCategory('elektronik')">elektronik ({{ filteredCategoryElektronik.length }})</p>
          <p @click="fetchProductByCategory('makanan')">makanan ({{ filteredCategoryMakanan.length }})</p>
          <p @click="fetchProductByCategory('rumah tangga')">rumah tangga ({{ filteredCategoryRumahTangga.length }})</p>
          <p @click="fetchProductByCategory('other')">other ({{ filteredCategoryOther.length }})</p>
        </div>
      </div>
      <div id="product-list" class="row">
        <CardAll
          v-if="categoryShow == 'all'"
          :products="allProducts"
        ></CardAll>
        <CardRumahTangga
          v-if="categoryShow == 'rumah tangga'"
          :products="filteredCategoryRumahTangga"
        ></CardRumahTangga>
        <CardElektronik
          v-if="categoryShow == 'elektronik'"
          :products="filteredCategoryElektronik"
        ></CardElektronik>
        <CardFashion
          v-if="categoryShow == 'fashion'"
          :products="filteredCategoryFashion"
        ></CardFashion>
        <CardMakanan
          v-if="categoryShow == 'makanan'"
          :products="filteredCategoryMakanan"
        ></CardMakanan>
        <CardOther
          v-if="categoryShow == 'other'"
          :products="filteredCategoryOther"
        ></CardOther>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardElektronik from '../components/CardElektronik'
import CardFashion from '../components/CardFashion'
import CardMakanan from '../components/CardMakanan'
import CardOther from '../components/CardOther'
import CardRumahTangga from '../components/CardRumahTangga'
import CardAll from '../components/CardAll'

export default {
  name: 'Home',
  data () {
    return {
      categoryShow: 'all'
    }
  },
  components: {
    CardElektronik,
    CardFashion,
    CardMakanan,
    CardOther,
    CardRumahTangga,
    CardAll
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    fetchProductByCategory (payload) {
      this.categoryShow = payload
    },
    addProduct () {
      this.$router.push({ path: '/addProduct' })
    },
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.products
    },
    filteredCategoryFashion () {
      return this.allProducts.filter(Product => Product.category === 'fashion')
    },
    filteredCategoryElektronik () {
      return this.allProducts.filter(Product => Product.category === 'elektronik')
    },
    filteredCategoryMakanan () {
      return this.allProducts.filter(Product => Product.category === 'makanan')
    },
    filteredCategoryRumahTangga () {
      return this.allProducts.filter(Product => Product.category === 'rumah tangga')
    },
    filteredCategoryOther () {
      return this.allProducts.filter(Product => Product.category === 'other')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>
  #tab-category {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
    color: white;
  }
  #tab-category-content {
    margin-left: 10px;
    margin-top: 40%;
  }
  #tab-category-content button {
    margin-bottom: 40px;
    background-color: white;
    color: black;
    border-radius: 5px;
    outline: none;
    border: 0;
  }
  #tab-category-content button:hover {
    opacity: 0.8;
    outline: none;
    border: 0;
  }
  #tab-category-content p {
    margin-top: 40px;
    cursor: pointer;
  }
  #tab-category-content p:hover {
    opacity: 0.6;
  }
  #product-list {
    margin-left: 200px;
  }
  #card-footer {
    margin-left: 20px;
  }
  #card-footer button {
    width: 30px;
    height: 30px;
    border: 0;
    background-color: black;
    color: white;
    outline: none;
    border-radius: 2px;
  }
  #card-footer button:hover {
    opacity: 0.8;
    outline: none;
  }
</style>
