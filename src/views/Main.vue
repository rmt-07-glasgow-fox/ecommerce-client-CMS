<template>
  <div>
    <input type="checkbox" id="check" checked>
    <div class="sidebar">
      <a href="" @click.prevent="navigateToProduct"><i class="fas fa-desktop"></i><span>Product</span></a>
      <a href="" @click.prevent="navigateToCategory"><i class="fas fa-th"></i><span>Category</span></a>
      <a href="" @click.prevent="navigateToBanner"><i class="fas fa-table"></i><span>Banner</span></a>
      <a href="" @click.prevent="logout" class="mt-5 text-danger"><i class="fas fa-sign-out"></i><span>Logout</span></a>
      <a href="" @click.prevent="changeSideBar" class="hide"><i class="fas fa-sliders-h"></i><span>Hide</span></a>
    </div>
    <!--sidebar end-->

    <div class="content">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {

    }
  },
  methods: {
    changeSideBar () {
      if (document.getElementById('check').checked) {
        document.getElementById('check').checked = false
      } else {
        document.getElementById('check').checked = true
      }
    },
    logout () {
      this.$store.dispatch('logout')
    },
    navigateToProduct () {
      if (this.$route.path !== '/') this.$router.push('/')
    },
    navigateToCategory () {
      if (this.$route.path !== '/categories') this.$router.push('/categories')
    },
    navigateToBanner () {
      if (this.$route.path !== '/banners') this.$router.push('/banners')
    },
    addProduct (name, price, stock, imageUrl) {
      this.$emit('addProduct', name, price, stock, imageUrl)
    },
    getProduct () {
      this.$store.dispatch('getProduct')
    },
    getCategory () {
      this.$store.dispatch('getCategory')
    }
  },
  created () {
    this.getProduct()
    this.getCategory()
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  .left_area h3{
    color: #fff;
    margin: 0;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 900;
  }

  .left_area span{
    color: #19B3D3;
  }

  .logout_btn{
    padding: 5px;
    background: #19B3D3;
    text-decoration: none;
    float: right;
    margin-top: -30px;
    margin-right: 40px;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    transition: 0.5s;
    transition-property: background;
  }

  .logout_btn:hover{
    background: #0B87A6;
  }

  .hide{
    position: absolute;
    bottom: 0;
  }

  .sidebar {
    background: #2f323a;
    position: fixed;
    left: 0;
    width: 250px;
    height: 100%;
    transition: 0.5s;
    transition-property: left;
  }

  .sidebar .profile_image{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-bottom: 10px;
  }

  .sidebar h4{
    color: #ccc;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .sidebar a{
    color: #fff;
    display: block;
    width: 100%;
    line-height: 60px;
    text-decoration: none;
    padding-left: 40px;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;
  }

  .sidebar a:hover{
    background: #19B3D3;
  }

  .sidebar i{
    padding-right: 10px;
  }

  a #sidebar_btn{
    z-index: 1;
    color: black;
    position: fixed;
    cursor: pointer;
    left: 300px;
    font-size: 20px;
    margin: 5px 0;
    transition: 0.5s;
    transition-property: color;
  }

  a #sidebar_btn:hover{
    color: #19B3D3;
  }

  #check:checked ~ .sidebar{
    left: -190px;
  }

  #check:checked ~ .sidebar a span{
    display: none;
  }

  #check:checked ~ .sidebar a{
    font-size: 20px;
    margin-left: 170px;
    width: 80px;
  }

  .content{
    margin-left: 250px;
    background: url() no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    transition: 0.5s;
  }

  #check:checked ~ .content{
    margin-left: 60px;
  }

  #check{
    display: none;
  }
</style>
