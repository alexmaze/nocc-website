import './events.less'

export default {
  name: 'events',
  template: require('./events.html'),
  data () {
    return {
      eventList: [{
        url: '/static/demo/event1',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        url: '/static/demo/event2',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        url: '/static/demo/event3',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        url: '/static/demo/event4',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1'
      }, {
        url: '/static/demo/event5',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1'
      }, {
        url: '/static/demo/event6',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1'
      }]
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      console.log('hello events')
      console.log(this.$route.params.type)
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.loadData()
    }
  }
}
