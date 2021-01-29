import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../components/home/Home.vue';
import Banners from '../components/banners/Banners.vue';
import Categories from '../components/categories/Categories.vue';
import Products from '../components/products/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: Dashboard,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'banners', name: 'Banners', component: Banners },
      { path: 'categories', name: 'Categories', component: Categories },
      { path: 'products', name: 'Products', component: Products },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('access_token')) {
    next('/login');
  } else if (to.name === 'Login' && localStorage.getItem('access_token')) {
    next('/');
  } else {
    next();
  }
});

export default router;
