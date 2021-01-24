import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Account from '../views/Account.vue'
import Notification from '../views/Notification.vue'
import AddProduct from '../views/AddProduct.vue'

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
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function isAuthenticated () {
  if (localStorage.access_token) {
    console.log('isAuthenticated true')
    return true
  } else {
    console.log('isAuthenticated false')
    return false
  }
}

router.beforeEach((to, from, next) => {
  console.log(to.name, isAuthenticated())
  if (to.name !== 'Login' && !isAuthenticated()) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated()) next({ name: 'Dashboard' })
  else next()
})

export default router
