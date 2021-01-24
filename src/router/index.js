import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import ProductAdd from '../views/ProductAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/productadd',
    name: 'ProductAdd',
    component: ProductAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
