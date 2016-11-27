import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zh from './i18n/zh.json'
import en from './i18n/en.json'

Vue.use(VueI18n)
Vue.config.lang = 'zh'

Vue.locale('zh', zh)
Vue.locale('en', en)
