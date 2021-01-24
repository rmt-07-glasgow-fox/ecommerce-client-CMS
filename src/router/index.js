import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/products/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name !== 'Login' && to.name !== 'Registration') {
    next({ name: 'Login' })
  } else if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Home' })
  } else if (localStorage.access_token && to.name === 'Registration') {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
