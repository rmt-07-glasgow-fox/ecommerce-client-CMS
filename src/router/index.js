import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/products/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/products/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Dashboard' })
  } else if (localStorage.access_token) {
    next()
  } else if (to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
