import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './app'
import store from './store'
import router from './router'

import 'normalize.css'

require('es6-promise').polyfill()
require('isomorphic-fetch')

sync(store, router)

/* eslint-disable no-new */
new Vue({
  name: 'root',
  el: '#app',
  render: h => h(App),
  store,
  router
})
