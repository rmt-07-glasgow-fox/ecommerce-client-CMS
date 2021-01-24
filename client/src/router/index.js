import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import ProductList from '../components/ProductList.vue'
import EditProduct from '../components/EditProduct.vue'
import AddProduct from '../components/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        name: 'ProductList',
        path: '/',
        component: ProductList,
        children: [
          {
            name: 'EditProduct',
            path: '/products/:id/edit',
            component: EditProduct
          }
        ]
      },
      {
        name: 'AddProduct',
        path: '/addproduct',
        component: AddProduct
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

router.beforeEach((to, _, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('access_token')) {
    next('/login')
  } else if (to.name === 'Login' && localStorage.getItem('access_token')) {
    next('/')
  } else {
    next()
  }
})

export default router
