import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '../views/Landing.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Landing
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
