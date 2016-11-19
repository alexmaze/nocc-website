import './faculty.less'
import UserCard from '../../components/user-card'

export default {
  name: 'faculty',
  template: require('./faculty.html'),
  components: { UserCard },
  data () {
    return {
      userList: [{
        id: '1',
        url: '/static/demo/event1.png',
        position: 'Chairman',
        email: 'charldd@alex.com',
        title: 'Prof. Lou Yongqi',
        description: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '2',
        url: '/static/demo/event5.png',
        position: 'Chairman',
        title: 'Prof. Lou Yongqi',
        description: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '2',
        url: '/static/demo/event5.png',
        position: 'Chairman',
        title: 'Prof. Lou Yongqi',
        description: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '2',
        url: '/static/demo/event5.png',
        position: 'Chairman',
        title: 'Prof. Lou Yongqi',
        description: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '2',
        url: '/static/demo/event5.png',
        position: 'Chairman',
        title: 'Prof. Lou Yongqi',
        description: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
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
