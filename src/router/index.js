import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Dashboard',
    component: Dashboard
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
  } else if (localStorage.access_token || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
