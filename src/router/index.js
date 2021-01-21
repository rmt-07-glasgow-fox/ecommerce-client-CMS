import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import ProductsAdd from '../views/ProductsAdd.vue'
import ProductEdit from '../views/ProductsEdit.vue'

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
    path: '/products/add',
    name: 'ProductsAdd',
    component: ProductsAdd
  },
  {
    path: '/products/:id',
    name: 'ProductsEdit',
    component: ProductEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
