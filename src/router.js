import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

import Product from './views/product/Index'
import DataProduct from './components/Product/Product'
import AddProduct from './components/Product/Add'
import EditProduct from './components/Product/Edit'

import Category from './views/category/Index'
import DataCategory from './components/Category/Category'
import AddCategory from './components/Category/Add'
import EditCategory from './components/Category/Edit'

import Banner from './views/banner/Index'
import DataBanner from './components/Banner/Banner'
import AddBanner from './components/Banner/Add'
import EditBanner from './components/Banner/Edit'

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
    path: '/products',
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
    component: Category,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'category.data',
        component: DataCategory,
        meta: { title: 'Manage Category' }
      },
      {
        path: 'add',
        name: 'category.add',
        component: AddCategory,
        meta: { title: 'Add New Category' }
      },
      {
        path: 'edit/:id',
        name: 'category.edit',
        component: EditCategory,
        meta: { title: 'Edit Category' }
      }
    ]
  },
  {
    path: '/banner',
    component: Banner,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'banner.data',
        component: DataBanner,
        meta: { title: 'Manage Banner' }
      },
      {
        path: 'add',
        name: 'banner.add',
        component: AddBanner,
        meta: { title: 'Add New Banner' }
      },
      {
        path: 'edit/:id',
        name: 'banner.edit',
        component: EditBanner,
        meta: { title: 'Edit Banner' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }]
})

router.beforeEach((to, from, next) => {
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
