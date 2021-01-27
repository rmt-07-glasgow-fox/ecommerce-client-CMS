import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import FormRegister from '../components/FormRegister.vue'
import EditProduct from '../components/EditProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'FormRegister',
    component: FormRegister
  },
  {
    path: '/products/:id/edit',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/products/new',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/logout',
    name: 'Logout'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('access_token')) {
    if (to.name === 'Login' || to.name === null) {
      return next('/home')
    } else if (to.name === 'Logout') {
      return store.dispatch('logout')
    }
  } else {
    if (to.name !== 'LoginPage') {
      return next('/login')
    }
  }
  next()
})

// router navigation guard

export default router
