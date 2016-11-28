import './event.less'

export default {
  name: 'event',
  template: require('./event.html'),
  data () {
    return {
      event: undefined
    }
  },
  methods: {
    loadData () {
      console.log('hello event')
      console.log(this.$route.params.id)

      fetch(`/api/event/${this.$route.params.id}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        this.event = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.loadData()
    }
  },
  mounted () {
    console.log('event mounted')
    this.loadData()
  }
}
