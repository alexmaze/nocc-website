import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './app'
import store from './store'
import router from './router'
import './i18n'

import 'normalize.css'

require('es6-promise').polyfill()
require('isomorphic-fetch')

sync(store, router)

Vue.mixin({
  computed: {
    locale: {
      get () {
        return Vue.config.lang
      },
      set (val) {
        Vue.config.lang = val
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  name: 'root',
  el: '#app',
  render: h => h(App),
  store,
  router
})
