import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '@/views/adminDashboard/AdminDashboard.vue'
import AuthAdmin from '@/views/auth/AuthAdmin.vue'

import Dashboard from '@/components/dashboard/Dashboard.vue'

import AddProduct from '@/components/products/ProductAdd.vue'
import EditProduct from '@/components/products/ProductEdit.vue'
import Products from '@/components/products/Products.vue'

import AddCategory from '@/components/categories/CategoryAdd.vue'
import EditCategory from '@/components/categories/CategoryEdit.vue'
import Categories from '@/components/categories/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/authadmin'
  },
  {
    path: '/authadmin',
    name: 'AuthAdmin',
    component: AuthAdmin
  },
  {
    path: '/admindashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('SECRET_MODE') === '4dm1nm0d31stru3' && localStorage.getItem('access_token')) return next()
      if (!localStorage.getItem('SECRET_MODE') && localStorage.getItem('access_token')) return next({ name: 'AuthAdmin' })

      return next({ name: 'AuthAdmin' })
    },
    children: [
      { path: '', name: 'Dashboard', component: Dashboard },
      {
        path: 'products',
        name: 'Products',
        component: Products,
        children: [
          { path: 'add', name: 'AddProduct', component: AddProduct },
          { path: 'edit/:id', name: 'EditProduct', component: EditProduct }
        ]
      },
      {
        path: 'categories',
        name: 'Categories',
        component: Categories,
        children: [
          { path: 'add', name: 'AddCategory', component: AddCategory },
          { path: 'edit/:id', name: 'EditCategory', component: EditCategory }
        ]
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
  if (to.name !== 'AuthAdmin' && !localStorage.getItem('access_token')) return next({ name: 'AuthAdmin' })
  if (to.name === 'AuthAdmin' && localStorage.getItem('access_token') && localStorage.getItem('SECRET_MODE') === '4dm1nm0d31stru3') return next({ name: 'AdminDashboard' })

  return next()
})

export default router
