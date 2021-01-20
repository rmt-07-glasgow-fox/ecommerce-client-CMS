import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/add',
        component: EddProduct
      },
      {
        path: '/edit',
        component: EditProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  // },
  // {
  //   path: '/add',
  //   name: 'Add',
  //   component: () => import('../componentc/AddProduct.vue')
  // },
  // {
  //   path: '/edit',
  //   name: 'Edit',
  //   component: () => import('../componentc/EditProduct.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
