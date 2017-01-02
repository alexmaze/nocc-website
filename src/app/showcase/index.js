import './showcase.less'
import { Slider, SliderItem } from '../../components/slider'

export default {
  name: 'showcase',
  template: require('./showcase.html'),
  components: { Slider, SliderItem },
  data () {
    return {
      slides: [],
      news: []
    }
  },
  methods: {
    loadSlides () {
      fetch('/api/showcase')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        data.images.forEach(image => {
          if (image && image.url) {
            this.slides.push(image)
          }
        })
      })
    },
    loadNews () {
      fetch('/api/event?page=1&perpage=6')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        data.items.forEach(item => {
          this.news.push(item)
        })
      })
    }
  },
  mounted () {
    console.log('showcase mounted')
    this.loadSlides()
    this.loadNews()
  }
}
