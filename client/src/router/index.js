import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ProductCard from '../components/ProductCard.vue'
import AddProduct from '../components/AddProduct.vue'
import BannerCard from '../components/BannerCard.vue'
import AddBanner from '../components/AddBanner.vue'
import EditProduct from '../components/EditProduct.vue'
import EditBanner from '../components/EditBanner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children: [
      {
        path: '',
        name: 'ProductCard',
        component: ProductCard
      }, {
        path: '/addproduct',
        name: 'AddProduct',
        component: AddProduct
      }, {
        path: '/banners',
        name: 'BannerCard',
        component: BannerCard
      }, {
        path: '/addbanner',
        name: 'AddBanner',
        component: AddBanner
      }, {
        path: '/editproduct/:id',
        name: 'ProductBanner',
        component: EditProduct
      }, {
        path: '/editbanner/:id',
        name: 'EditBanner',
        component: EditBanner
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
