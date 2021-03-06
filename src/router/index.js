import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component :  () => import(/* webpackChunkName: "about" */ '../views/Login')//'../components/SignIn.vue')

  },
  {
    path: '/signup',
    name: 'Signup',
    component:  () => import(/* webpackChunkName: "about" */ '../components/Signup.vue')

  },
  {
    path: '/chatbox',
    name: 'Chatbox',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Chatbox.vue')


  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
