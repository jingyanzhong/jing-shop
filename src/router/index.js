import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/productsList.vue')
  },
  {
    path: '/products/:productId',
    component: () => import('../views/userProduct.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/checkOut',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/checkOut/:orderId',
    component: () => import('../views/orderList.vue')
  },
  {
    path: '/payOrder/:orderId',
    component: () => import('../views/PayOrder.vue')
  },
  {
    path: '/success',
    component: () => import('../views/SuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
