import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Add from '../views/add'
import Update from '../views/update'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/update',
    name: 'update',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
