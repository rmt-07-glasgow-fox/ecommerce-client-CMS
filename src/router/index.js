import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adminLogin',
    name: 'adminLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/product',
    name: 'Product',
    children: [
      {
        path: '/product/add',
        name: 'AddProduct',
        component: () => import('../components/AddModal.vue')
      },
      {
        path: '/product/delete/:id',
        name: 'DeleteProduct',
        component: () => import('../components/DeleteModal.vue')
      }
    ],
    component: () => import('../views/Product.vue')
  },
  {
    path: '/product/edit/:id',
    name: 'EditProduct',
    component: () => import('../views/EditProduct.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'adminLogin' && !localStorage.getItem('access_token')) return next({ name: 'adminLogin' })
  if (to.name === 'adminLogin' && localStorage.getItem('access_token')) return next({ path: 'Product' })

  return next()
})

export default router
