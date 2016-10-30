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
  }
}
