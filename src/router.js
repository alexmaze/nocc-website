import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './app/main'
import Showcase from './app/showcase'
import Mission from './app/mission'
import Event from './app/event'
import Events from './app/events'
import JewelryLab from './app/jewelry-lab'
import Faculty from './app/faculty'

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
        }, {
          name: 'faculty',
          path: 'faculty',
          component: Faculty
        }
      ]
    }, {
      name: 'jewelry',
      path: '/jewelry-lab',
      component: JewelryLab
    }, {
      path: '*',
      redirect: to => '/'
    }
  ]
})

export default router
