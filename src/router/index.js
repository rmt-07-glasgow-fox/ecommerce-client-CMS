import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../components/Products.vue'
import ProductForm from '../views/ProductForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next()
      } else {
        router.push('/')
      }
    }
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next()
      } else {
        router.push('/')
      }
    }
  },
  {
    path: '/products/add',
    name: 'products/add',
    component: ProductForm,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next()
      } else {
        router.push('/')
      }
    }
  },
  {
    path: '/products/:id',
    name: 'products/:id',
    component: ProductForm,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next()
      } else {
        router.push('/')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
