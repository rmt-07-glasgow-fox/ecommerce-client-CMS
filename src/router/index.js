import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Dashboard from '../components/layouts/Dashboard.vue'
import Products from '../components/products/Products.vue'
import Categories from '../components/categories/Categories.vue'
import Banners from '../components/banners/Banners.vue'

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
        path: '',
        name: 'Dasboard',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'categories',
        name: 'Categories',
        component: Categories
      },
      {
        path: 'banners',
        name: 'Banners',
        component: Banners
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
  to.name !== 'Login' && !localStorage.getItem('access_token') ? next('/login') : localStorage.getItem('access_token')
  to.name === 'Login' && localStorage.getItem('access_token') ? next('/') : next()
})

export default router
