import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Product from '../components/Product.vue'
import AddPage from '../views/AddPage.vue'
import EditPage from '../views/EditPage.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Product',
        component: Product
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'AddPage',
    component: AddPage
  },
  {
    path: '/products/:id/edit',
    name: 'EditPage',
    component: EditPage
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('access_token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
    next()
  } else {
    if (to.path === '/') {
      next({ path: '/login' })
    }
    next()
  }
})

export default router
