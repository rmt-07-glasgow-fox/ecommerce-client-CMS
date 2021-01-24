import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Template from '../views/Template.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/template',
    name: 'Template',
    component: Template
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function isAuthenticated () {
  if (localStorage.access_token) {
    return true
  } else {
    return false
  }
}

router.beforeEach((to, from, next) => {
  // console.log(to.name, isAuthenticated())
  if (to.name !== 'Login' && !isAuthenticated()) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isAuthenticated()) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
