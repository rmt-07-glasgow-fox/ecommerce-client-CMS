import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import AddForm from '../components/AddForm.vue'
import EditForm from '../components/EditForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/admin',
        name: 'Home',
        component: Home
      },
      {
        path: 'admin/products/add',
        name: 'AddForm',
        component: AddForm
      },
      {
        path: 'admin/products/:id',
        name: 'EditForm',
        component: EditForm
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
