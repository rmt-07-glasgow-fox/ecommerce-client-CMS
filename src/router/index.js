import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Edit from '../views/Edit.vue'
import Add from '../views/Add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Main',
    component: Main
  },
  {
    path: '/products',
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
    next({ name: 'Main' })
  } else if (localStorage.access_token) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
