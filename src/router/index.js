import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Product from '../components/Product'
import Category from '../components/Category'
import Banner from '../components/Banner'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Product',
        component: Product
      },
      {
        path: '/categories',
        component: Category
      },
      {
        path: '/banners',
        component: Banner
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
  if (to.path !== '/login' && !localStorage.access_token) next({ name: 'Auth' })
  else if (to.path === '/login' && localStorage.access_token) next({ name: 'Product' })
  else next()
})

export default router
