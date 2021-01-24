import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch((err) => err)
// }
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/banners',
    name: 'Banner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Banner.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const isAutenticated = localStorage.access_token
  console.log(isAutenticated)
  if (to.name !== 'Login' && !isAutenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAutenticated) next({ path: '/' })
  else next()
  // if (!isAutenticated) {
  //   if (to.name !== 'Login' && !isAutenticated) next({ path: '/login' })
  // } else if (isAutenticated) {
  //   if (to.name === 'Login' && isAutenticated) next({ path: '/home' })
  // } else next()
})

export default router
