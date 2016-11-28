import './events.less'
import EventPreview from '../../components/event-preview'
import Pager from '../../components/pager'

export default {
  name: 'events',
  template: require('./events.html'),
  components: { EventPreview, Pager },
  data () {
    return {
      page: 1,
      perpage: 6,
      type: 0,
      total: 0,
      eventList: []
    }
  },
  methods: {
    loadData () {
      if (this.$route.params.type === 'forum') {
        this.type = 0
      } else if (this.$route.params.type === 'lecture') {
        this.type = 1
      } else if (this.$route.params.type === 'workshop') {
        this.type = 2
      }
      console.log('load events')
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
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.page = 1
      this.total = 0
      this.loadData()
    }
  },
  mounted () {
    console.log('events mounted')
    this.loadData()
  }
}

function delHtmlTag (str) {
  return str.replace(/<[^>]+>/g, '')
}
