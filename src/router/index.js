import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import ListProduct from '../components/ListProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import EditProduct from '../components/EditProduct.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: ListProduct
      },
      {
        path: '/add',
        component: AddProduct
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
  //   component: () => import('../views/AddProduct.vue')
  // },
  // {
  //   path: '/edit',
  //   name: 'Edit',
  //   component: () => import('../views/EditProduct.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('access_token')
//   if (to.name !== 'LoginPage' && !isAuthenticated) next({ name: 'LoginPage' })
//   else if (to.name === 'LoginPage' && isAuthenticated) next({ name: 'ListProduct' })
//   else next()
// })

export default router
