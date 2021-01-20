import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

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
    path: '/products/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/products/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Dashboard' })
  } else if (localStorage.access_token || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Home' })
  }
})

export default router
