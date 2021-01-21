import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'
import Login from '../views/Login.vue'
import Banner from '../components/C_AdminDashboard/Banner.vue'
import Category from '../components/C_AdminDashboard/Category.vue'
import AddProduct from '../components/C_AdminDashboard/AddProduct.vue'
import EditProduct from '../components/C_AdminDashboard/EditProduct.vue'
import Product from '../components/C_AdminDashboard/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    children: [
      {
        path: 'product',
        name: 'Product',
        component: Product,
        children: [
          {
            path: 'add',
            name: 'AddProduct',
            component: AddProduct
          },
          {
            path: 'edit/:id',
            name: 'EditProduct',
            component: EditProduct
          }
        ]
      },
      {
        path: 'category',
        name: 'Category',
        component: Category
      },
      {
        path: 'banner',
        name: 'Banner',
        component: Banner
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
  if (to.name !== 'Login' && !localStorage.getItem('access_token')) return next({ name: 'Login' })
  if (to.name === 'Login' && localStorage.getItem('access_token')) return next({ name: 'AdminDashboard' })

  return next()
})

export default router
