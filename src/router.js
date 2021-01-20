import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

import Product from './views/product/Index'
import DataProduct from './views/product/Product'
import AddProduct from './views/product/Add'
import EditProduct from './views/product/Edit'

import Category from './views/category/Index'
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
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'product.data',
        component: DataProduct,
        meta: { title: 'Manage Product' }
      },
      {
        path: 'add',
        name: 'product.add',
        component: AddProduct,
        meta: { title: 'Add New Product' }
      },
      {
        path: 'edit/:id',
        name: 'product.edit',
        component: EditProduct,
        meta: { title: 'Edit Product' }
      }
    ]
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
