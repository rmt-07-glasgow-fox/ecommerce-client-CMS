import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditPage from '../views/EditPage.vue'
import AddProductPage from '../views/AddProductPage.vue'
import LoginPage from '../views/LoginPage.vue'
import VuePageTransition from 'vue-page-transition'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)
Vue.use(VuePageTransition)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { transition: 'zoom' }
  },
  {
    path: '/editProduct/:id',
    name: 'EditPage',
    component: EditPage
  },
  {
    path: '/addProduct',
    name: 'AddProductPage',
    component: AddProductPage
  },
  {
    path: '*',
    name: '404NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
