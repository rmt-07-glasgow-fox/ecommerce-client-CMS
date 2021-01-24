import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import Add from '../views/Add.vue'
import AddProduct from '../components/AddProduct.vue'
import AddBanner from '../components/AddBanner.vue'
import AddCategory from '../components/AddCategory.vue'
import Banners from '../views/Banners.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/banners',
    name: 'Banners',
    component: Banners
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
    children: [
      {
        path: '/',
        component: AddProduct
      },
      {
        path: 'category',
        component: AddCategory
      },
      {
        path: 'banner',
        component: AddBanner
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
