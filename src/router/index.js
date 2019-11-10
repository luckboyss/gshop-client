import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '@/views/MSite/MSite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    name: 'msite',
    component: MSite
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search/Search.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order/Order.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
