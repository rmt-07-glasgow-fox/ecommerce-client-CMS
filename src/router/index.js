import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../components/ProductList.vue'
import AddProduct from '../components/AddProduct.vue'
import ProductDetail from '../components/ProductDetail.vue'
import EditProduct from '../components/EditProduct.vue'
import DeleteProduct from '../components/DeleteProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Products.vue'),
    children: [
      {
        path: '',
        component: ProductList
      },
      {
        path: 'add-product',
        component: AddProduct
      }
    ]
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    children: [
      {
        path: '',
        component: ProductDetail
      },
      {
        path: 'edit',
        component: EditProduct
      },
      {
        path: 'delete',
        component: DeleteProduct
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: () => import('../views/LoginForm.vue')
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: () => import('../views/RegisterForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && to.name !== 'LoginForm' && to.name !== 'RegisterForm' && !localStorage.access_token) {
    next({ name: 'LoginForm' })
  } else {
    next()
  }
})

export default router
