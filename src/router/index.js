import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import eCommerceAPI from '../api/e-commerceAPI'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/products/add',
        component: () => import('../components/AddProduct.vue')
      },
      {
        path: '/products/:id',
        component: () => import('../components/EditProduct.vue')
      },
      {
        path: '/products/',
        component: () => import('../components/ProductsCard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    },
    beforeEnter: (to, from, next) => {
      if (to.name === 'Login' && !localStorage.access_token) {
        next()
      } else {
        eCommerceAPI.get('/products', {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            store.commit('insertProducts', data)
            router.push('/products')
          })
          .catch(err => console.log(err, 'err store fetchProducts'))
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresAuth: false
    },
    beforeEnter: (to, from, next) => {
      if (to.name === 'Register' && !localStorage.access_token) {
        next()
      } else {
        eCommerceAPI.get('/products', {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            store.commit('insertProducts', data)
            router.push('/products')
          })
          .catch(err => console.log(err, 'err store fetchProducts'))
      }
    }
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/notFound.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) {
    if (to.name === 'Register') {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
