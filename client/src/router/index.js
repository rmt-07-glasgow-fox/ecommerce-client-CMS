import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'LoginPage' && !localStorage.getItem('access_token')) return next({ name: 'Login' })
  if (to.name === 'LoginPage' && localStorage.getItem('access_token')) return next({ path: 'Home' })
  if (!localStorage.getItem('access_token')) return next({ path: 'Login' })
  return next()
})
export default router
