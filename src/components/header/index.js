import Vue from 'vue'
import './header.less'
export default {
  name: 'nocc-header',
  template: require('./header.html'),
  data () {
    return {
      msg: 'Hello NOCC!'
    }
  },
  methods: {
    goHome () {
      this.$router.push({
        name: 'index'
      })
    }
  },
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
}
