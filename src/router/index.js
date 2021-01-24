import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dasboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/editProduct/:id',
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
  if (!localStorage.access_token && to.name !== 'Login' && to.name !== 'Register') {
    next({ name: 'Login' })
  } else if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Dashboard' })
  } else if (localStorage.access_token && to.name === 'Register') {
    next({ name: 'Dashboard' })
  } else if (localStorage.access_token && to.name === 'Auth') {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
