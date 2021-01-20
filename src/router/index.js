import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ path: '/login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/products/add',
    name: 'Add Product',
    component: () => import('../views/ProductAdd.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ path: '/login' })
      } else {
        next()
      }
    }
  },
  {
    path: '/products/:id/edit',
    name: 'Edit Product',
    component: () => import('../views/ProductEdit.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) {
        next({ path: '/login' })
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    store.commit('updateLoginStatus', false)
    next()
  } else {
    store.commit('updateLoginStatus', true)
    next()
  }
})

export default router
