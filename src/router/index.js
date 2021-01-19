import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Page404 from '../views/Page404.vue'
import Dashboard from '../views/Dashboard.vue'
import AddNewProduct from '../components/AddNewProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/addproduct',
        name: 'AddNewProduct',
        component: AddNewProduct
      }
    ]
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if ((to.name !== 'Login' && to.path !== '/') && !isAuthenticated) next({ name: 'Auth' })
  else if ((to.name === 'Login' || to.path === '/') && isAuthenticated) next({ name: 'Dashboard' })
  else next()
})

export default router
