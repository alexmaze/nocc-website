import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index'
import Showcase from './components/Showcase'
import EventList from './components/EventList'
import Mission from './components/Mission'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          component: Showcase
        }, {
          path: 'events',
          component: EventList
        }
      ]
    }, {
      path: '/jewelry-lab',
      component: Mission
    }
  ]
})

export default router
