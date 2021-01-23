import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthPage from '../views/AuthPage'
import HomePage from '../views/HomePage'
import ProductsPage from '../views/ProductsPage'
import BannerPage from '../views/BannerPage'
import AddProductPage from '../views/AddProductPage'
import DashboardPage from '../views/DashboardPage'
import EditProductPage from '../views/EditProductPage'
import NotFoundPage from '../views/NotFound'
import AddBannerPage from '../views/AddBannerPage'
import EditBannerPage from '../views/EditBannerPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) {
        next()
      } else {
        next('/')
      }
    },
    children: [
      {
        path: 'products',
        component: ProductsPage
      },
      {
        path: 'add-product',
        component: AddProductPage
      },
      {
        path: 'edit-product/:id',
        component: EditProductPage
      },
      {
        path: 'banners',
        component: BannerPage
      },
      {
        path: 'add-banner',
        component: AddBannerPage
      },
      {
        path: 'edit-banner/:id',
        component: EditBannerPage
      },
      {
        path: 'dashboard',
        component: DashboardPage
      },
      {
        path: '*',
        component: NotFoundPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
