import './mission.less'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'mission',
  template: require('./mission.html'),
  components: { Slider, SliderItem },
  data () {
    return {
      slides: [{
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case8.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case2.png',
        date: '2016.5.1-5.3'
      }],
      content: `<p>The Spacecraft Tracking and Data (Acquisition) Network (STADAN or STDN) was established by NASA to satisfy the requirement for long-duration, highly-available space-to-ground communications. Real-time operational control and scheduling of the network was provided by the Network Operations Control Center (NOCC) at the Goddard Space Flight Center (GSFC) in Greenbelt, Maryland.[1]</p>
                <p>Consisting of parabolic dish antennas and telephone switching equipment deployed around the world, the STADAN provided space-to-ground communications for approximately 15 minutes of a 90-minute orbit period. This limited contact period sufficed for unmanned spacecraft, but manned spacecraft require a much higher data collection time. In May 1971 STADAN was consolidated with the Manned Space Flight Network (MSFN) to form the Spaceflight Tracking and Data Network (STDN).</p>`
    }
  }
}
