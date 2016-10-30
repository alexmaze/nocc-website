import './event-preview.less'
export default {
  name: 'event-preview',
  props: ['data'],
  template: require('./event-preview.html'),
  data () {
    return {
      msg: 'Hello NOCC!'
    }
  },
  methods: {
    detail () {
      console.log(this.data.id)
      this.$router.push({
        path: '/event',
        params: {
          id: this.data.id
        }
      })
    }
  }
}
