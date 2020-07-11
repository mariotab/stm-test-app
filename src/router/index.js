import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../page/home.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../page/users.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    props: true,
    component: () => import('../page/user.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
