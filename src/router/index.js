import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Product from '../components/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Product',
        component: Product
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/auth',
  //   name: 'Auth',
  //   component: Auth
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('access_token')) {
    if (to.name === 'Login') {
      next({ name: 'Home' })
    }
    next()
  } else {
    if (to.name === 'Home') {
      next({ name: 'Login' })
    }
    next()
  }
})

export default router
