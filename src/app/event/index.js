import './event.less'

export default {
  name: 'event',
  template: require('./event.html'),
  data () {
    return {
      event: {
        id: '1',
        url: '/static/demo/post1.png',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]',
        images: [{
          url: '/static/demo/post2.png',
          description: 'hello world!'
        }]
      }
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      console.log('hello event')
      console.log(this.$route.params.id)
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.loadData()
    }
  }
}
