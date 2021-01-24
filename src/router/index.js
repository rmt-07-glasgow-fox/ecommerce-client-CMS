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
    path: '/addProduct',
    name: 'AddProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddProduct.vue')
  },
  {
    path: '/loginAdmin',
    name: 'LoginForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginForm.vue')
  },
  {
    path: '/updateProduct/:id',
    name: 'UpdateForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'LoginForm' && !localStorage.access_token) next({ path: '/loginAdmin' })
  else if (to.name === 'LoginForm' && localStorage.access_token) next({ path: '/' })
  else next()
})

export default router
