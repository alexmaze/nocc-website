import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './app/main'
import Showcase from './app/showcase'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Showcase
        }
      ]
    }
  ]
})

export default router
