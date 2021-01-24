import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BannerPage from '../views/BannerPage.vue'
import LoginPage from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/banner',
    name: 'BannerPage',
    component: BannerPage
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
  const checkAuth = localStorage.access_token
  if (!checkAuth && to.name === 'Home' || to.name === 'BannerPage') {
    next({ name: 'LoginPage' })
  } else if (checkAuth && to.name === 'LoginPage') {
    next({ name: 'Home' })
  } else {
    next()
  }
})
export default router
