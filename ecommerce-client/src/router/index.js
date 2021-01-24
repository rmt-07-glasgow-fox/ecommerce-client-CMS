import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/products',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: () => import('../components/addProduct.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Home' })
  } else if (!localStorage.access_token && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
