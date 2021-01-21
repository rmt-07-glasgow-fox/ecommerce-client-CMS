import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import LoginPage from '../views/LoginPage.vue'
import ListProduct from '../views/ListProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import DetailProduct from '../views/DetailProduct.vue'
import ListCategory from '../views/ListCategory.vue'
import AddCategory from '../views/AddCategory.vue'
import DetailCategory from '../views/DetailCategory'
import ListBanner from '../views/ListBanner.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'ListProduct',
        component: ListProduct
      },
      {
        path: 'products/add',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: 'products/:id',
        name: 'DetailProduct',
        component: DetailProduct
      },
      {
        path: 'categories',
        name: 'ListCategory',
        component: ListCategory
      },
      {
        path: 'categories/add',
        name: 'AddCategory',
        component: AddCategory
      },
      {
        path: 'categories/:id',
        name: 'DetailCategory',
        component: DetailCategory
      },
      {
        path: 'banners',
        name: 'ListBanner',
        component: ListBanner
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name !== 'LoginPage' && !isAuthenticated) {
    next({ name: 'LoginPage' })
  } else if (to.path === '/login' && isAuthenticated) {
    next({ name: 'Dashboard' })
  } else if (to.path === '/') {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
