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
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/dashboard/addContent',
    name: 'AddContent',
    component: () => import('../components/AddContent.vue')
  },
  {
    path: '/dashboard/editContent/:id',
    name: 'EditContent',
    component: () => import('../components/EditContent.vue')
  },
  {
    path: '/dashboard/addBanner',
    name: 'AddBanner',
    component: () => import('../components/AddBanner.vue')
  },
  {
    path: '/dashboard/editBanner/:id',
    name: 'EditBanner',
    component: () => import('../components/EditBanner.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
