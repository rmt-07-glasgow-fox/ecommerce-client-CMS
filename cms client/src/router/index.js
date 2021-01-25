import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Material from '../views/Material.vue'
import Login from '../views/Login.vue'
import EditMaterial from '../views/EditMaterial.vue'
import AddMaterial from '../views/AddMaterial.vue'
import Banner from '../views/Banner.vue'
import AddBanner from '../views/AddBanner.vue'
import EditBanner from '../views/EditBanner.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/material',
    name: 'Material',
    component: Material
  },
  {
    path: '/material/:id',
    name: 'EditMaterial',
    component: EditMaterial
  },
  {
    path: '/addMaterial',
    name: 'AddMaterial',
    component: AddMaterial
  },
  {
    path: '/banner',
    name: 'Banner',
    component: Banner
  },
  {
    path: '/addBanner',
    name: 'AddBanner',
    component: AddBanner
  },
  {
    path: '/banner/:id',
    name: 'EditBanner',
    component: EditBanner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
