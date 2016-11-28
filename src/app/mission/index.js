import './mission.less'
import { Slider, SliderItem } from '../../components/slider'

export default {
  name: 'mission',
  template: require('./mission.html'),
  components: { Slider, SliderItem },
  data () {
    return {
      slides: [],
      text: '',
      text_en: ''
    }
  },
  methods: {
    loadData () {
      fetch('/api/mission')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        // debugger
        data.images.forEach(image => {
          this.slides.push(image)
        })
        this.text = data.text
        this.text_en = data.text_en
      })
    }
  },
  mounted () {
    console.log('showcase mounted')
    this.loadData()
  }
}
