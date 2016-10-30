import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './app/main'
import Showcase from './app/showcase'
import Mission from './app/mission'
import Events from './app/events'

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
        }, {
          path: 'mission',
          component: Mission
        }, {
          path: 'events/:type',
          component: Events
        }
      ]
    }
  ]
})

export default router
