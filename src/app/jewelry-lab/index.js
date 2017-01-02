import './jewelry-lab.less'
import NoccFooter from '../../components/footer'
import EventPreview from '../../components/event-preview'
import Pager from '../../components/pager'
import { Slider, SliderItem } from '../../components/slider'

export default {
  name: 'jewelry-lab',
  template: require('./jewelry-lab.html'),
  components: { NoccFooter, EventPreview, Pager, Slider, SliderItem },
  data () {
    return {
      page: 1,
      perpage: 6,
      type: 10,
      total: 0,
      slides: [],
      content: '',
      content_en: '',
      midInfo: [],
      eventList: []
    }
  },
  methods: {
    loadData () {
      fetch(`/api/lab`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        this.slides = data.images
        this.midInfo.push(data.circle1)
        this.midInfo.push(data.circle2)
        this.midInfo.push(data.circle3)
        this.midInfo.push(data.circle4)
        this.content = data.text
        this.content_en = data.text_en
      })
    },
    loadEvents () {
      fetch(`/api/event?page=${this.page}&perpage=${this.perpage}&type=${this.type}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(data => {
        this.eventList = []
        data.items.forEach(item => {
          item.content = delHtmlTag(item.content)
          item.content_en = delHtmlTag(item.content_en)
          this.eventList.push(item)
        })
        this.total = data.total
      })
    },
    go (className) {
      let top = document.querySelector(className).offsetTop
      console.log(top)
      document.body.scrollTop = top
    },
    goNext () {
      console.log('real go next')
      this.page++
      this.loadData()
    },
    goPre () {
      console.log('real go pre')
      this.page--
      this.loadData()
    }
  },
  mounted () {
    console.log('lab mounted')
    this.loadData()
    this.loadEvents()
  }
}

function delHtmlTag (str) {
  if (!str || !str.replace) return
  return str.replace(/<[^>]+>/g, '')
}
