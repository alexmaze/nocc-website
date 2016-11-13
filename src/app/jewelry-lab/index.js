import './jewelry-lab.less'
import NoccFooter from '../../components/footer'
import EventPreview from '../../components/event-preview'
import Pager from '../../components/pager'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'jewelry-lab',
  template: require('./jewelry-lab.html'),
  components: { NoccFooter, EventPreview, Pager, Slider, SliderItem },
  data () {
    return {
      slides: [{
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/pre1.jpg',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/post1.png',
        date: '2016.5.1-5.3'
      }],
      content: `<p>The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]</p>
                <p>Consisting of parabolic dish antennas and telephone switching equipment deployed around the world, the STADAN provided space-to-ground communications for approximately 15 minutes of a 90-minute orbit period. This limited contact period sufficed for unmanned spacecraft, but manned spacecraft require a much higher data collection time. In May 1971 STADAN was consolidated with the Manned Space Flight Network (MSFN) to form the Spaceflight Tracking and Data Network (STDN).</p>`,
      midInfo: [{
        title: 'Jewelry making & Metal Smithing 1',
        url: '/static/demo/pre1.jpg',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.'
      }, {
        title: 'Jewelry making & Metal Smithing 1',
        url: '/static/demo/post1.png',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.'
      }, {
        title: 'Jewelry making & Metal Smithing 1',
        url: '/static/demo/pre1.jpg',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.'
      }, {
        title: 'Jewelry making & Metal Smithing 1',
        url: '/static/demo/post1.png',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.'
      }],
      eventList: [{
        id: '1',
        url: '/static/demo/event1.png',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '2',
        url: '/static/demo/event5.png',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '1',
        url: '/static/demo/event3.png',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1',
        content: 'The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space to ground commons. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]'
      }, {
        id: '1',
        url: '/static/demo/event4.png',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1'
      }, {
        id: '1',
        url: '/static/demo/event5.png',
        name: 'TRIPLE PARADE 2016 TIANJING MUSEUM',
        date: '2016.10.1-2016.11.1'
      }]
    }
  }
}
