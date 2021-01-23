import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/main/Login.vue'
import Products from '../views/Products.vue'
import Home from '../views/main/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductForm from '../views/ProductForm.vue'
import Banners from '../views/Banners.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    components: {
      default: Login
    },
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next({ name: 'Dashboard' })
      } else {
        next()
      }
    }
  },
  {
    path: '',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: { requiresAuth: true }
      },
      {
        path: '/products/:id/detail',
        name: 'Detail Product',
        component: ProductDetail,
        meta: { requiresAuth: true }
      },
      {
        path: '/products/add',
        name: 'Add Product',
        component: ProductForm,
        meta: { requiresAuth: true }
      },
      {
        path: '/products/:id/edit',
        name: 'Edit Product',
        component: ProductForm,
        meta: { requiresAuth: true }
      },
      {
        path: '/banners',
        name: 'Banners',
        component: Banners,
        meta: { requiresAuth: true }
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
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.access_token && to.name !== 'Login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
