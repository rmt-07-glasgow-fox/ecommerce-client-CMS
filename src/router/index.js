import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import AddBanner from '../views/AddBanner.vue'
import EditProduct from '../views/EditProduct.vue'
import EditBanner from '../views/EditBanner.vue'
import ListBanners from '../components/listBanners.vue'
import ListProducts from '../components/listProducts.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [{
      path: '',
      component: ListProducts
    },
    {
      path: 'banners',
      component: ListBanners
    }]
  },
  {
    path: '/products/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/banners/add',
    name: 'AddBanner',
    component: AddBanner
  },
  {
    path: '/products/:id/edit',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/banners/:id/edit',
    name: 'EditBanner',
    component: EditBanner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
