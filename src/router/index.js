import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Content from '../components/Content'
import Product from '../components/Product'
import ProductAdd from '../components/ProductAdd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/',
    name: 'Main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path: '/',
        component: Content,
        children: [
          {
            path: '/',
            component: Product
          },
          {
            path: '/add',
            component: ProductAdd
          }
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

export default router
