import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ProductAdd from '../components/ProductAdd.vue'
import ProductEdit from '../components/ProductEdit.vue'
import ProductFetch from '../components/ProductFetch.vue'
import BannerFetch from '../components/BannerFetch.vue'
import BannerAdd from '../components/BannerAdd.vue'
import BannerEdit from '../components/BannerEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: ProductFetch
      },
      {
        path: 'add',
        component: ProductAdd
      },
      {
        path: 'edit/:id',
        component: ProductEdit
      },
      {
        path: 'banner',
        component: BannerFetch
      },
      {
        path: 'banner/add',
        component: BannerAdd
      },
      {
        path: 'banner/edit/:id',
        component: BannerEdit
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.access_token) next({ name: 'Dashboard' })
  else next()
})

export default router
