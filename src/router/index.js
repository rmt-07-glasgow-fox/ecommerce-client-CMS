import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormAdd from '../views/FormAdd'
import FormUpdate from '../views/FormUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'FormAdd',
    component: FormAdd
  },
  {
    path: '/update/:id',
    name: 'FormUpdate',
    component: FormUpdate
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.getItem('access_token')) {
    next({ name: 'Login' })
  } else if (to.name === 'FormAdd' && !localStorage.getItem('access_token')) {
    next({ name: 'Login' })
  } else if (to.name === 'FormUpdate' && !localStorage.getItem('access_token')) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && localStorage.getItem('access_token')) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
