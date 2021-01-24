import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Login from '../views/Login.vue'
import ProductsAdd from '../views/ProductsAdd.vue'
import ProductEdit from '../views/ProductsEdit.vue'
import Banners from '../views/Banners.vue'
import BannersAdd from '../views/BannersAdd.vue'

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
  },
  {
    path: '/banners',
    name: 'Banners',
    component: Banners
  },
  {
    path: '/banners/add',
    name: 'BannersAdd',
    component: BannersAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { 
  if ( to.name !== 'Login' && !localStorage.access_token ) {
    next( { name: 'Login' } )
  } else if (to.name === 'Login' && localStorage.access_token) {
    next( { name: 'Products' })
  } else {
    next()
  }
})

export default router
