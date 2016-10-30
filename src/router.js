import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './app/main'
import Showcase from './app/showcase'
import Mission from './app/mission'
import Event from './app/event'
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
          name: 'index',
          path: '',
          component: Showcase
        }, {
          name: 'mission',
          path: 'mission',
          component: Mission
        }, {
          name: 'event',
          path: 'event/:id',
          component: Event
        }, {
          name: 'events',
          path: 'events/:type',
          component: Events
        }
      ]
    }
  ]
})

export default router
