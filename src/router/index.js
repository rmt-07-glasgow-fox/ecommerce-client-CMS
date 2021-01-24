import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/404.vue'
import Dashboard from '../views/Dashboard.vue'
import HomePage from '../views/HomePage.vue'
import CreateProduct from '../views/CreateProduct'
import EditProduct from '../views/EditProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/createProduct',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name === 'Dashboard' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'Login' && isAuthenticated) next({ name: 'Dashboard' })
  else next()
})
export default router
