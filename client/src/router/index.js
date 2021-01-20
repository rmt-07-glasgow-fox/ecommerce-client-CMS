import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../components/Products/Products'
import Banner from '../components/Banner/Banner'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'banner',
        name: 'Banner',
        component: Banner
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Home' && isAuthenticated) next({ name: 'Products' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Products' })
  else next()
})

export default router
