import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    name: 'msite',
    component: () => import(/* webpackChunkName: "msite" */ '@/views/MSite/MSite.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/Search/Search.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '@/views/Order/Order.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile/Profile.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
