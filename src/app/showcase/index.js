import './showcase.less'
import { Slider, SliderItem } from '../../components/slider'

export default {
  name: 'showcase',
  template: require('./showcase.html'),
  components: { Slider, SliderItem },
  data () {
    return {
      slides: [{
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case1.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case2.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case3.png',
        date: '2016.5.1-5.3'
      }],
      news: [{
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case2.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case3.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case4.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case5.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case6.png',
        date: '2016.5.1-5.3'
      }, {
        title: 'LI HEN TAIWAN COMTENPORARY JEWELRY LECTURE',
        url: '/static/demo/case7.png',
        date: '2016.5.1-5.3'
      }]
    }
  },
  mounted () {
    console.log('showcase mounted')
  }
}
