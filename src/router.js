import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Product from './views/product'
import Category from './views/category'
import Login from './views/Auth'

import store from './store.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    meta: { requiresAuth: true }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }]
})

router.beforeEach((to, from, next) => {
  store.commit('CLEAR_ERRORS')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let auth = store.getters.isAuth
    if (!auth) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
