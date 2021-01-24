import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Banners from '../views/Banners.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (!isAuthenticated && to.name === 'Products') {
    next({ name: 'Home' })
  } else if (!isAuthenticated && to.name === 'Banners') {
    next({ name: 'Home' })
  } else if (isAuthenticated && to.name === 'Login') {
    next({ name: 'Products' })
  } else {
    next()
  }
})

export default router
